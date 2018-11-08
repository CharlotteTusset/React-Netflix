import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Homepage from './components/homePage';
import Movies from './components/showCard';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/*<ul className="menu">
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/showCard">Movies</Link></li>
          </ul>*/}
          <Switch>
            <Route exact={true} path="/" component={Homepage}/>
            <Route exact={true} path="/showCard" component={Movies}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;