import React, { Component, useRef } from 'react';
import './header.css'

class Header extends Component {
  // inputRef = React.createRef();

  // onKeyPress =(event) => {
  //   if(event.key === 'Enter'){
  //     console.log("엔터")
    
  //   }
  // }

  // handleSearch = () => {
  //   const name = this.inputRef.current.name
  //   console.log(name)
  // }
  render() {
    return (
    <header className="header">
      <img  className="youtubeLogo" alt="youtubeLogo" src ="/images/YoutubeLogo.png"/>
      <input 
        // ref={this.inputRef}
        className="searchBar" 
        placeholder="Search..."
        // onKeyPress={this.onKeyPress}
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