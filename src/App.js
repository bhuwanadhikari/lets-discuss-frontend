import React from 'react';

import Header from './components/Header/Header';
import AddPost from './components/AddPost/AddPost';
import Post from './components/Post/Post';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <AddPost />
        <Post />
       </div>
    );
  }
}

export default App;
