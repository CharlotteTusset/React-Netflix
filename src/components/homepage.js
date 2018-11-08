import React, {Component} from 'react';
import ButtonCards from './buttonCards';

class Homepage extends Component {
  render() {
    return (
      <div>
      	<h1 className="main-title">Welcome to Netflix</h1>
        <ButtonCards />
      </div>
    );
  }
}

export default Homepage;

