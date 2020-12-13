import React, { Component } from 'react';
import './main.css'
import Header from '../header/header';
import VideoList  from '../videoList/videoList';
import Detail from '../detail/detail';
// import '../../../public/data/data.json'

class Main extends Component {
  state = {
    videos: [],
    userInput: "",
    selectedVideo: ""
  };

  // componentDidMount = () => {
  //   fetch ("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=쇼미더머니&key=AIzaSyByLU3awseWBJkXsbtKVtn8kZEPVa471Zk")
  //   .then(response => response.json())
  //   .then(response =>{
  //     this.setState({
  //       videos : response.items
  //     })
  //   })
  // }


  componentDidMount = () => {
    fetch ('http://localhost:3004/data/data.json')
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

  HandleSelectVideo = (video) => {
    // const selectedVideo = {...this.state.videos};
    this.setState({
      selectedVideo : video
    })
  }

  render() {
    // console.log(this.state.selectedVideo)
      const filterVideo = this.state.videos.filter((video) => {
      return video.snippet.title.toLowerCase().includes(this.state.userInput.toLowerCase());
    });

  

    return (
      <div>
        <Header
        handleChange={this.handleChange}
        />
        <section className="detailContainer">
        {this.state.selectedVideo && 
          <div className="videoDetail">
        <Detail 
        video={this.state.selectedVideo}
        selectedVideo={this.state.selectedVideo}
        />
        </div>
        }

        <div className="sideVideoList">
        <VideoList 
        videos={filterVideo}
        onVideoClick={this.HandleSelectVideo}
        // displyay={selectedVideo ? 'list': 'grid'}

        />
        </div>
      </section>
      </div>
    );
  }
}

export default Main;