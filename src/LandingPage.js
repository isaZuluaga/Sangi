import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBarComponent'
import Footer from './Components/FooterComponent'
import MainContent from './Components/MainContentComponent'

class LandingPage extends Component {
  render(){
    return (
      <div className="LandingPage">
        <NavBar/>
        <MainContent/>
        <Footer/>
      </div>
    );
  }
}
export default LandingPage;