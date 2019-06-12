import React from 'react';
import axios from 'axios';

import './AddPost.css';
import Button from '../Button/Button';
import Input from '../Input/Input';


class AddPost extends React.Component {
    constructor(props){
        super();
        this.state = {
            postText: ""
        };
    }

    onChangeHandler = (event) => {
        this.setState({postText: event.target.value});
    }

    onAddPostHandler = (postText) => {
        axios.post('https://letsdiscuss00.herokuapp.com/add-post', {postText})
        .then((post) => {
            window.location.reload();    
            console.log('added post',post.data);
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="Container">
                <Input
                    inputSize="BigInput"
                    placeholder="Add New Post!"
                    changed ={(event)=>{this.onChangeHandler(event)}}
                />

                <Button
                    btnSize="BigButton"
                    title="Post"
                    clicked = {() => {this.onAddPostHandler(this.state.postText)}}
                />
            </div>
        )
    }
}

export default AddPost;