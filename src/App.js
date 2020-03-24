import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBarComponent'
import Footer from './Components/FooterComponent'
import MainContent from './Components/MainContentComponent'

class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar/>
        <MainContent/>
        <Footer/>
      </div>
    );
  }
}
export default App;
