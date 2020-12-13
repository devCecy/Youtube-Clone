import React, { Component } from 'react';
import './header.css'

class Header extends Component {
  // inputRef = createRef();

  
  // handleSearch =()=> {
  //   const name = this.inputRef.current.value;
  //   onSearch(name);
  // }

  render() {
    return (
    <header className="header">
      <img  className="youtubeLogo" alt="youtubeLogo" src ="/images/YoutubeLogo.png"/>
      <input 
        ref={this.inputRef}
        className="searchBar" 
        placeholder="Search..."
        onChange={this.props.handleChange}
        />
      <button 
      className="searchBtn"
      // onClick={this.handleSearch}
      >Click</button>
    </header>
    );
  }
}

export default Header;