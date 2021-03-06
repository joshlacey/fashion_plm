import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MaterialContainer from './components/MaterialContainer'
import StyleContainer from './components/StyleContainer'
import { Menu } from 'semantic-ui-react'


class App extends Component {

  render() {
    return (
        <div>
          <Menu>
            <Menu.Item as={Link} to='/'>
              Home
            </Menu.Item>
            <Menu.Item as={Link} to='/material'>
              Material
            </Menu.Item>
            <Menu.Item as={Link} to='/styles'>
              Styles
            </Menu.Item>
          </Menu>
          <Route exact path="/" render={()=> <h1>Welcome Home</h1>} />
          <Route exact path="/material" component={MaterialContainer} />
          <StyleContainer />
        </div>
    );
  }
}

export default App;
