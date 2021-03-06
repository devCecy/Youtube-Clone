import React, { Component } from 'react';
import './videoList.css'
import Video from '../video/video';

class VideoList extends Component {

  render() {
    return (
      <ul className="videoList">
        {this.props.videos.map(video => {
          return ( 
            <Video 
            key={video.id}
            video={video}
            onVideoClick={this.props.onVideoClick}
            />
          )
        })}
        </ul>
    );
  }
}

export default VideoList;