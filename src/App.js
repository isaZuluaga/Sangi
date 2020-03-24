import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBarComponent'
import Footer from './Components/FooterComponent'
class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar/>
        <Footer/>
      </div>
    );
  }
}
export default App;
