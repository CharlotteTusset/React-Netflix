import React, { Component } from 'react';
import { Link} from "react-router-dom";


class ButtonCards extends Component {
  render() {
    return (
      <div>
        <Link type="button" className="home-button" to="/showCard">Movies</Link>
      </div>
    );
  }
}

export default ButtonCards;