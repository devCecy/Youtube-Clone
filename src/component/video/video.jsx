import React, { Component } from 'react';
import './video.css'

class Video extends Component {

  render() {
    return (
      <>
        {this.props.videos.map(video => {
          return ( 
            <div className="videoBox">
            <img src={video.snippet.thumbnails.default.url}/>
            <span className="videoTitle"
            onClick={this.props.goToDetail}
            >{video.snippet.title}</span>
          </div>
          )
        })}
        </>
    );
  }
}

export default Video;