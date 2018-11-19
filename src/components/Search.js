import React, { Component } from "react";

class Search extends Component {
 
  render() {
        return (
            <header>
              <input type="text" placeholder="search" value={this.props.StrUser} onChange={this.props.Funct} />
            </header>
        )
    }

}

export default Search;