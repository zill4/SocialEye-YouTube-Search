import React from "react"
import ChannelItem from "./ChannelItem"
import {List, ListItem} from '@material-ui/core'


class ChannelList extends React.Component 
{
    render() 
    {
        return (
        <List>
            {this.props.channels.map(channel => (
                <React.Fragment>
                <ListItem>
                    <ChannelItem key={channel.id} 
                    channel={channel} 
                    handleChangeProps={this.props.handleChangeProps}
                    handleDeleteProps={this.props.handleDeleteProps}
                    />
                </ListItem>

                </React.Fragment>
            ))}
        </List>
            )
    }
}

export default ChannelList