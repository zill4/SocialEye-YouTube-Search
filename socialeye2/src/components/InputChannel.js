import React, { Component } from "react"
// MaterialUI
import TextField from '@material-ui/core/TextField';  
import Button from '@material-ui/core/Button';

// api

class InputChannel extends Component {
    // State
    state = {
        title: ""
    };
    // Handle change
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    // submit
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleCreateProps(this.state.title);
        this.setState({
            title: ""
        });
    };

    // Render
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                    <TextField  
                    placeholder="Placeholder"  
                    label="Search channel" 
                    value={this.state.title}
                    name="title"
                    onChange={this.onChange}
                    />
                    <Button type="submit" value="submit" variant="contained" color="primary">
                    submit
                    </Button>
                    {/* <input type="submit" value="submit"/> */}
            </form>
        )
    }
}

export default InputChannel