import React from 'react';
import axios from 'axios';

import Header from './components/Header/Header';
import AddPost from './components/AddPost/AddPost';
import Post from './components/Post/Post';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      allPosts: []
    }
  }





  componentDidMount() {
    
    axios.get('https://letsdiscuss00.herokuapp.com/get-all-posts')
    .then((response) => {
      // console.log(response.data);
      this.setState({allPosts: response.data});
      // console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }



  render() {

    let allPostList = this.state.allPosts.map((post, index) => {
      return (
        <Post key = {index} postData = {post} />
      )
    });

    return (
      <div className="App">
        <Header />
        <AddPost />
        {allPostList}
      </div>
    );
  }
}

export default App;
