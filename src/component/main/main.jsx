import React, { Component } from 'react';
import './main.css'
import Header from '../header/header';
import VideoList  from '../videoList/videoList';


class Main extends Component {
  state = {
    videos: [],
    userInput: ""
  };

  componentDidMount = () => {
    fetch ("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=쇼미더머니&key=AIzaSyCzoAtSVR9qKWwSkT6jRk7COEdxWrOOSEo")
    .then(response => response.json())
    .then(response =>{
      this.setState({
        videos : response.items
      })
    })
  }

  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  handleGoToDetail = () => {
  this.props.history.push('/detail')
  }

  // handleSearch = () => {
  //   const filterVideo = this.state.videos.filter((video) => {
  //   return video.snippet.title.toLowerCase().includes(this.state.userInput.toLowerCase());
  //   });
  // }

  render() {
    
      const filterVideo = this.state.videos.filter((video) => {
      return video.snippet.title.toLowerCase().includes(this.state.userInput.toLowerCase());
    });
    return (
      <div>
        <Header
        handleChange={this.handleChange}/>
        <VideoList 
        videos={filterVideo}
        handleGoToDetail={this.handleGoToDetail}
        />
      </div>
    );
  }
}

export default Main;