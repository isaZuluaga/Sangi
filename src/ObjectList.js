import React, { Component } from 'react';
import './App.css';
import './ObjectList.css';
import NavBar from './Components/NavBarComponent';
import Footer from './Components/FooterComponent';
import lupa from './img/lupa.png';
import { PageContext } from './context/pageContext'

class ObjectList extends Component {

  render(){
    const{data1, displaysangiObjectList, getSangiObjectList,showObjectList}= this.context
    const showHideClassName = showObjectList ? "display-block" : "display-none";
    return (
        <div className={showHideClassName}>
            {getSangiObjectList}
            <NavBar/>
                <div className="filterInputContainer">
                    <img src={lupa} alt="searchIcon" id="searchImg"></img>
                    <input type="SearchInput" id="inputSearchText" name="find"></input>
                </div>
                <div className="grid-container">
                {displaysangiObjectList(data1)}
                </div>
            <Footer/>
        </div>
    );
  }
}
ObjectList.contextType = PageContext
export default ObjectList;