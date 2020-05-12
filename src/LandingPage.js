import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBarComponent'
import Footer from './Components/FooterComponent'
import MainContent from './Components/MainContentComponent'
import { PageContext } from './context/pageContext'

class LandingPage extends Component {
  render(){
    return (
      <div>
        <div className="LandingPage">
          <NavBar/>
          <MainContent/>
          <Footer/>
        </div>
      </div>
    );
  }
}
LandingPage.contextType = PageContext
export default LandingPage;