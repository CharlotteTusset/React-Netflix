import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import './App.css';
import Homepage from './components/homepage';
import Movies from './components/showCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="menu">
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/showCard">Movies</Link></li>
        </ul>
        <Route exact={true} path="/" component={Homepage}/>
        <Route exact={true} path="/showCard" component={Movies}></Route>
      </div>
    );
  }
}

export default App;