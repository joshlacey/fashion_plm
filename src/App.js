import React, { Component } from 'react';
import './App.css';
import MaterialContainer from './components/MaterialContainer'

const baseStyles = 'http://localhost:3000/api/v1/styles'

class App extends Component {

  render() {
    return (
      <MaterialContainer />
    );
  }
}

export default App;
