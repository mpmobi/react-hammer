import React, { Component } from 'react';
import Hammer from 'react-hammerjs';
import './Home.css';

let options = {
  touchAction:'compute',
  recognizers: {
      tap: {
          time: 600,
          threshold: 100
      }
  }
};

class Home extends Component {
  handleTap() {
    console.log('handleTap!');
  }

  handleSwipe() {
    console.log('handleSwipe!');
  }
  
  render() {
    return (
      // <Hammer onTap={this.handleTap} onSwipe={this.handleSwipe}><div>Tap Me</div></Hammer>
      <Hammer onTap={this.handleTap} options={options}><div>Tap Me</div></Hammer>
    );
  }
}

export default Home;

