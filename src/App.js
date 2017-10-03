import React, { Component } from 'react';
import logo from './btag_logo.svg';
import './App.css';
import BathroomCard from './BathroomCard';
import fire from './fire';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bathroom1: {},
      bathroom2: {},
      loaded: false
    };
  }

  componentWillMount() {
    let dataRef = fire.database().ref('roomstat').limitToLast(20);

    dataRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const val = childSnapshot.val();
        if (+val.roomNumber === 1) {
          this.setState({bathroom1: val, loaded: true});
        } else {
          this.setState({bathroom2: val, loaded: true});
        }
      });
    });

    dataRef.on('child_added', (snapshot) => {
      const val = snapshot.val();
      if (+val.roomNumber === 1) {
        this.setState({bathroom1: val});
      } else {
        this.setState({bathroom2: val});
      }
    })
  }

  renderBathroomCards = () => {
    if (!this.state.loaded) {
      return <h1 style={{color: 'white'}}>Loading!</h1>
    }

    return (
        <div>
          <BathroomCard name="Bathroom 1" open={this.state.bathroom1.stats === 'open' ? true : false} />
          <BathroomCard name="Bathroom 2" open={this.state.bathroom2.stats === 'open' ? true : false} />
        </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bananatag Bathroom Monitor</h1>
          <h5>find us @ #vancouver_bathrooms</h5>
        </header>

        {this.renderBathroomCards()}
      </div>
    );
  }
}

export default App;
