import React, { Component } from 'react';

import happyBanana from './happy_banana.png';
import sadBanana from './sad_banana.png';

class BathroomCard extends Component {

  render() {
    const { name, open } = this.props;

    return (
      <div className="bathroom-card">
        <h1>{name}</h1>
        <h2 className={open ? 'bathroom-open' : 'bathroom-closed'} >{`is ${open ? 'Open!!!' : 'Closed...'}`}</h2>
        <img className="banana-img" src={open ? happyBanana : sadBanana} />
      </div>
    );
  }
}

export default BathroomCard;
