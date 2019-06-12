import React from 'react';
import './Post.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

class Post extends React.Component {

    render(){
        return (
            <div className="Container PostContainer">
                <div className = "PostText">this is dummy post</div>
                <div className = "Wrapper">
                    <div className = "Label">4 Claps</div>
                    <div className = "Label">5 Comments</div>
                </div>
                <div className = "Wrapper">
                    <Button btnSize = "SmallButton" clicked = {} title = "Clap!" />
                    <Input inputSize = "SmallInput" />
                    <Button btnSize = "SmallButton" clicked = {} title = "Comment"/>
        
                </div>
                <div className = "Comments"></div>
            </div>
        )
    }
}

export default Post;