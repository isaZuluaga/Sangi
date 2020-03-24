import React, { Component } from 'react';
import './App.css';
import './ObjectList.css';
import './UserInfo.css'
import NavBar from './Components/NavBarComponent';
import Footer from './Components/FooterComponent';
import Card from './Components/CardComponent';
import equipo from './img/equipo.png';


class UserInfo extends Component {
  render(){
    return (
        <div>
            <NavBar/>
            <div class="userInfoContainer">
        <img src={equipo} alt="userImg" id="userImg"></img>
        <p id="userDescription">
            INFORMACIÓN DEL USUARIO: <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ad? Illo, laborum reiciendis animi voluptates eveniet nobis.
            Pariatur cupiditate accusamus maxime laudantium quisquam, sunt asperiores deserunt laborum possimus aperiam eius.
        </p>
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
export default UserInfo;