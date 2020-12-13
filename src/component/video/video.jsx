import React, { Component } from 'react';
import './video.css'

class Videos extends Component {
  onVideoClick = () => {
    const video = this.props.video
    this.props.onVideoClick(video)
  }
  render() {
    const {title,channelTitle,thumbnails} = this.props.video.snippet
    return (
      <li 
      className="videoBox"
      onClick={this.onVideoClick}
      >
              <img 
              className="thumbnails"
            src={thumbnails.medium.url}
            alt="video thumbnail"
            />
            <div>
              <p 
              className="Title"
              >{title}</p>
              <p
              className="channelTitle"
              >{channelTitle}</p>
            </div>
      </li>
    );
  }
}

export default Videos;