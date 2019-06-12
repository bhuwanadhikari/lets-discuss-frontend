import React from 'react';
import './Post.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

class Post extends React.Component {


    onClapHandler = () => {
        console.log("clapped");
    }

    onCommentHandler = () => {
        console.log("commented");
    }

    onChangeHandler = () => {
        console.log("Changed");
    }

    render() {
        return (
            <div className="Container PostContainer">
                <div className="PostText">this is dummy post</div>
                <div className="Wrapper">
                    <div className="Label">4 Claps</div>
                    <div className="Label">5 Comments</div>
                </div>
                <div className="Wrapper">
                    <Button
                        btnSize="SmallButton"
                        clicked={this.onClapHandler}
                        title="Clap!"
                    />
                    <Input
                        inputSize="SmallInput"
                        changed = {this.onChangeHandler}
                        placeholder = "Add new comment"
                    />
                    <Button
                        btnSize="SmallButton"
                        clicked={this.onCommentHandler}
                        title="Comment"
                    />

                </div>
                <div className="Comments"></div>
            </div>
        )
    }
}

export default Post;