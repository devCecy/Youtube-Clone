import React, { Component } from 'react';

class Detail extends Component {
  render() {
    // console.log(this.props.video.id.videoId)
    return (
      <>
        <iframe 
        className="videos"
        type="text/html" 
        width="100%" 
        height="500px"
        src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`}
        frameBorder="0" 
        allowfullScreen
        ></iframe>
        <h2>{this.props.video.snippet.title}</h2>
        <h3>{this.props.video.snippet.channelTitle}</h3>
        <pre>{this.props.video.snippet.description}</pre>
        {/* <img
        className="detailThumnaile"
        alt="detailThumnaile"
        src= {this.props.video.thumbnails.medium.url}
        />
        <h1 className="detailBox"> */}
          {/* {this.props.video.title} */}
        {/* </h1> */}
      </>
    );
  }
}

export default Detail