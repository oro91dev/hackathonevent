import React, { Component } from 'react';
import './resources/App.css';
import Header from './components/header/Header';
import Event from './components/event';
import HackNfo from './components/hackNfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/footer';
import { Element } from 'react-scroll';



class App extends Component {
  render() {
    return (
      <div className="App" style={{height:"1500px", background:"cornflowerblue"}}>

      <Element name ="header"><Header/></Element>
      <Element name ="event"><Event/></Element>
      <Element name ="hacknfo"><HackNfo/></Element>
      <Element name ="highlights"><Highlights/></Element>
      <Element name ="price"><Pricing/></Element>
      <Element name ="location"><Location/></Element>
      <Element name ="footer"><Footer /></Element>
      
      
      </div>
    );
  }
}

export default App;
