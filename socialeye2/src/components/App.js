import React from "react"
import ChannelList from "./ChannelList"
import Header from "./Header"
import InputChannel from "./InputChannel"
import Navbar from "./Navbar"
// api
import youtube from '../apis/youtube'
// MaterialUI
import Grid from '@material-ui/core/Grid';

// ID management
import {v4 as uuidv4 } from "uuid";

// Styles


class App extends React.Component {

    // State
    state = {
        channels: [
        //   {
        //     id: 1,
        //     title: "Vans",
        //     completed: true
        //   },
        //   {
        //     id: 2,
        //     title: "Develop website and add content",
        //     completed: false
        //   },
        //   {
        //     id: 3,
        //     title: "Deploy to live server",
        //     completed: false
        //   }
        ]
        /*
        channels: [
            {
                id: "UChuLeaTGRcfzo0UjL-2qSbQ",
                title: "World Surf League",
                description: "Watch all the latest content of the world's best surfers, from Gabriel Medina and Carissa Moore to John John Florence and Caroline Marks, on the world's best ...",
                thumbnail: "https://yt3.ggpht.com/-L_f9lPc3tI4/AAAAAAAAAAI/AAAAAAAAAAA/qvztrVzug0Y/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",

                url: https://youtube.com/c/ + "worldsurfleague",
                viewCount: "234525526",
                subscriberCount: "627000",
                videoCount: "9955"
            }
        ]
        */
       };
    // Handle item complete change (drilling props)
    handleChange = (id) => {
        this.setState({
            channels: this.state.channels.map(channel => {
                if (channel.id === id) {
                    channel.completed = !channel.completed;
                }
                return channel;
            })
        })
    }
    // Handle delete item change
    handleDelete = (id) => {
        this.setState({
            channels: this.state.channels.filter(channel => {
                return channel.id !== id;
            })
        })
    }
    // Finish Handle create
        finishCreate = async (_id) => {
            const responseTwo = await youtube.get('/channels', {
                params: {
                    part: 'snippet,contentOwnerDetails,contentDetails,statistics',
                    id: _id,
                    key: 'AIzaSyDyNdz6KFlytSlBHDKUS-3UmccNOhC3MIo'
                }
            })
            var e = responseTwo.data.items[0]
            var newChannel = {
                id: e.id,
                title: e.snippet.title,
                description: e.snippet.description,
                url: 'https://www.youtube.com/' + e.snippet.customUrl + '/about',
                thumbnail: e.snippet.thumbnails.default.url,
                country: e.snippet.country,
                viewCount: e.statistics.viewCount,
                subscriberCount: e.statistics.subscriberCount,
                videoCount: e.statistics.videoCount
            }
            this.setState({
                channels: [...this.state.channels, newChannel]
            })
            newChannel = {}
        }
    // Handle Create item change
    handleCreate = async (title) => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                order: 'viewCount',
                type: 'channel',
                maxResults: 50,
                key: 'AIzaSyDyNdz6KFlytSlBHDKUS-3UmccNOhC3MIo',
                q: title
            }
        })
        response.data.items.forEach(element =>{
            this.finishCreate(element.id.channelId)
        });
    }

        // response.data.items.forEach(element => {
        //     var newChannel = {
        //         id: element.id.channelId,
        //         title: element.snippet.title,
        //         description: element.snippet.description,
        //         thumbnail: element.snippet.thumbnails.default.url
        //     }
        //     this.setState({
        //         channels: [...this.state.channels, newChannel]
        //     })
        //     newChannel = {}
        // });
        // const newTodo = {
        //     id: uuidv4(),
        //     title: response.data.items[0].snippet.title,
        //     completed: false
        // };
        // this.setState({
        //     todos: [...this.state.todos, newTodo]
        //     // todos: this.state.todos.push(newTodo)
        // })
    
    // Render
    render() {
        return (
            <div style={{margin: 0}}>
                <Navbar/>
            <Grid>
                {/* <Header /> */}
                <InputChannel handleCreateProps={this.handleCreate} />
                <ChannelList channels={this.state.channels} handleChangeProps={this.handleChange} handleDeleteProps={this.handleDelete}/>
            </Grid>
        </div>
        )
    }
}

export default App