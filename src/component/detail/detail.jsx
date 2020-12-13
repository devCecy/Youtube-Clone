import React, { Component } from 'react';
import Header from '../header/header';
import VideoList from '../videoList/videoList';

class Detail extends Component {
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

  render() {
    const filterVideo = this.state.videos.filter((video) => {
      return video.snippet.title.toLowerCase().includes(this.state.userInput.toLowerCase());
    });
    return (
      <>
      <Header />
      <p>영상과 디테일이 필요해요 </p>
      <VideoList 
        videos={filterVideo}/>
      </>
    );
  }
}

export default Detail