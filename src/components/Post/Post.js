import React, { Component } from 'react'
import axios from 'axios';

import './Post.css';
import Button from './../Button/Button';
import Input from './../Input/Input';


class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postData: this.props.postData,
            commentValue: ''
        }
    }

    onClapHandler = (_id) => {
        console.log("clapped");

        axios.post('https://letsdiscuss00.herokuapp.com/clap', { postId: _id })
            .then((response) => {
                console.log(response.data);
                window.location.reload();
            })
            .catch((error) => {
                console.log(console.error);

            });
    }

    onCommentHandler = (_id, commentValue) => {
        console.log("commented", _id, commentValue);
        
        axios.post('https://letsdiscuss00.herokuapp.com/comment', { postId: _id, commentValue: commentValue })
            .then((response) => {
                console.log(response.data);
                window.location.reload();

            })
            .catch((error) => {
                console.log(console.error);

            });
    }


    onChangeHandler = (event) => {
        this.setState({commentValue: event.target.value});
    }
    

    render() {

        const commentList = this.state.postData.comments.map((comment, index) => {
            return (
                <li key = {index} className="Comment">{comment}</li>
            )
        });
        return (
            <div className="Container PostContainer">
                <div className="PostText">{this.state.postData.postText}</div>

                <div className="Wrapper">
                    <div className="Label">{this.state.postData.clapsCount} Claps</div>
                    <div className="Label">{this.state.postData.comments.length} Comments</div>
                </div>

                <div className="Wrapper">
                    <Button
                        btnSize="SmallButton"
                        clicked={() => { this.onClapHandler(this.state.postData._id) }}
                        title="Clap!"
                    />
                    <Input
                        inputSize="SmallInput"
                        type="text"
                        placeholder="Add New Comment!"
                        changed = {(event) => { this.onChangeHandler(event) }}
                    />
                    <Button
                        btnSize="SmallButton"
                        clicked={() => { this.onCommentHandler(this.state.postData._id, this.state.commentValue) }}
                        title="Comment"
                    />

                </div>

                <div className="Comments">
                    {commentList}
                </div>

            </div>
        )
    }
}

export default Post
