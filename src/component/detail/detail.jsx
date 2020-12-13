import React, { Component } from 'react';
import Header from '../header/header';
import Video  from '../video/video';

class Detail extends Component {
  state = {
    videos: [],
    userInput: ""
  };

  render() {
    return (
      <>
      <Header />
      <div>
        영상과 디테일이 들어갈 자리입니닷 !
      </div>
      {/* <Video/> */}
      </>
    );
  }
}

export default Detail