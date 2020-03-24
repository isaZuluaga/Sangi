import React, { Component } from 'react';
import './App.css';
import './ObjectList.css';
import NavBar from './Components/NavBarComponent';
import Footer from './Components/FooterComponent';
import Card from './Components/CardComponent';
import lupa from './img/lupa.png';


class ObjectList extends Component {
  render(){
    return (
        <div>
            <NavBar/>
                <div class="filterInputContainer">
                    <img src={lupa} alt="searchIcon" id="searchImg"></img>
                    <input type="SearchInput" id="inputSearchText" name="find"></input>
                </div>
                <div className="grid-container">
                <Card name='Objeto 1' />
                <Card name='Objeto 2'/>
                <Card name='Objeto 3'/>
                <Card name='Objeto 4'/>
                <Card name='Objeto 5'/>
                <Card name='Objeto 6'/>
                <Card name='Objeto 7'/>
                <Card name='Objeto 8'/>
                </div>
            <Footer/>
        </div>
    );
  }
}
export default ObjectList;