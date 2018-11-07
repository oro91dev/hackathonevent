import React, { Component } from 'react';
import './resources/App.css';
import Header from './components/header/Header';
import Event from './components/event';



class App extends Component {
  render() {
    return (
      <div className="App" style={{height:"1500px", background:"cornflowerblue"}}>
      <Header/>
      <Event/>
      </div>
    );
  }
}

export default App;
