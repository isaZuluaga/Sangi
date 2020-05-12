import React from 'react';
import { Component } from 'react';
import history from '../history';
import { PageContext } from '../context/pageContext'

class navBar extends Component {

render(){

  return (
    <div>
        <nav className="navegationBar" id="navBarLandingPage">
            <section className="navbarDecoration" id="navbarDecoration1"></section>
            <section className="navbarDecoration" id="navbarDecoration2"></section>
            <button className="button" id="button-start" onClick={() => history.push('/start')}>Empezar</button>
            <button className="button" id="button-profile" onClick={() => history.push('/profile')}>Mi perfil</button>
        </nav>
    </div>
  );
}
}
navBar.contextType = PageContext
export default navBar;
