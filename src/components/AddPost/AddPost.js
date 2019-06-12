import React from 'react';
import './AddPost.css';

import Input from '../Input/Input';
import Button from '../Button/Button';

class AddPost extends React.Component{

    render(){
        return (
            <div className="Container">
                <Input />
                <Button />
            </div>
        )
    }
}

export default AddPost;