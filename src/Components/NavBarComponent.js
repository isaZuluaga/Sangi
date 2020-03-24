import React from 'react';

const navBar = () =>{
    return(
        <div>
            <nav className="navegationBar" id="navBarLandingPage">
                <section className="navbarDecoration" id="navbarDecoration1"></section>
                <section className="navbarDecoration" id="navbarDecoration2"></section>
                <button className="button" id="button-SingIn">Sing In</button>
                <button className="button" id="button-SingUp">Sing Up</button>
            </nav>
        </div>
    )
};
export default navBar;