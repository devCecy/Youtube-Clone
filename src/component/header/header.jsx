import React, { Component } from 'react';
import './header.css'

class Header extends Component {
  render() {
    return (
    <header>
      <img  className="youtubeLogo" alt="youtubeLogo" src ="/images/YoutubeLogo.png"/>
      <input 
        className="searchBar" 
        placeholder="Search..."
        onChange={this.props.handleChange}
        />
      <button 
      className="searchBtn"
      // onClick={this.props.handleSearch}
      >Click</button>
    </header>
    );
  }
}

export default Header;