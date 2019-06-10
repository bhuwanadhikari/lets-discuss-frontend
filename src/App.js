import React from 'react';

import Header from './components/Header/Header';
import AddPost from './components/AddPost/AddPost';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <AddPost />
        <div>Post</div>
        <div>Post</div>
        <div>Post</div>
        <div>Post</div>
       </div>
    );
  }
}

export default App;
