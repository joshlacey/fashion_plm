import React, { Component } from 'react';
import './App.css';
import MaterialContainer from './components/MaterialContainer'
import StyleContainer from './components/StyleContainer'

class App extends Component {

  render() {
    return (
      <div>
        <MaterialContainer />
        <StyleContainer />
      </div>
    );
  }
}

export default App;
