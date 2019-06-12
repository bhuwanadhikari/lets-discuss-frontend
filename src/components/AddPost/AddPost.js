import React from 'react';
import './AddPost.css';
import Input from '../Input/Input';

class AddPost extends React.Component{

    render(){
        return (
            <div className="Container">
                <Input />
                <button className = "BigButton">Post</button>
            </div>
        )
    }
}

export default AddPost;