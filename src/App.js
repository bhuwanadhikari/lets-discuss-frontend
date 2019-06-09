import React from 'react';

import Header from './components/Header/Header';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        {/* Not need p tag */ }
        <h2>This is where we are going to build our Lets Discuss! App.</h2>
      </div>
    );
  }
}

export default App;
