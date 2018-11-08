import React, {Component} from 'react';

class Header extends Component {

  constructor(){
  	super();
  	this.handleChange = this.handleChange.bind(this);
  	this.state = {
  		search: 'Search...'
  	};
  }
  handleChange(event) {
  	this.setState({search: event.target.value.substr(0,20)})
  }

  render() {
    return (
      <div>
       	<header>
       		<input type="text" placeholder="Search..." 
       		value={this.state.search} 
       		onChange={this.handleChange}/>
       	</header>
      </div>
    );
  }
}

export default Header;