import React, { Component } from 'react';
import './video.css'

class Videos extends Component {
  render() {
    const {title,channelTitle,thumbnails} = this.props.video.snippet
    return (
      <li className="videoBox">
              <img 
              className="thumbnails"
            src={thumbnails.medium.url}
            alt="video thumbnail"
            />
            <div>
              <p 
              className="Title"
              onClick={this.props.goToDetail}
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