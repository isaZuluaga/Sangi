import React, { Component } from 'react';
import './App.css';
import './ObjectList.css';
import './ObjectInfo.css'
import NavBar from './Components/NavBarComponent';
import Footer from './Components/FooterComponent';
import ObjectInfoComp from './Components/ObjectInfoComponent'



class ObjectInfo extends Component {
  render(){
    return (
        <div>
            <NavBar/>
            <ObjectInfoComp name='Objeto 1'/>
            <Footer/>
        </div>
    );
  }
}
export default ObjectInfo;