import React from 'react';
import './AddPost.css';
import '../Button/Button.css';
import '../Input/Input.css';

class AddPost extends React.Component{

    render(){
        return (
            <div className="Container">
                <input className = "BigInput"/>
                <button className = "BigButton">Post</button>
            </div>
        )
    }
}

export default AddPost;