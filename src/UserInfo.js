import React, { Component } from 'react';
import './App.css';
import './ObjectList.css';
import './UserInfo.css'
import NavBar from './Components/NavBarComponent';
import Footer from './Components/FooterComponent';
import { PageContext } from './context/pageContext'


class UserInfo extends Component {
  render(){
    const { getSangiUser,displaysangiObject,sangiUser,selectedObj,showUserInfo} = this.context
    const showHideClassName = showUserInfo ? "display-block" : "display-none";
      console.log('State: ',sangiUser.userObjects);
        console.log("el estado del objeto seleccionada desde user",selectedObj )
    return (
        <div className={showHideClassName}>
            {getSangiUser}
            <NavBar/>
            <div className="userInfoContainer">
        <img src={sangiUser.imgUrl} alt="userImg" id="userImg"></img>
        <p id="userDescription">
            <h2>{sangiUser.fullName}</h2> <br></br>
            <strong>Cedula:</strong>  {sangiUser.CC}<br></br>
            <strong>Celular: </strong>  {sangiUser.cellphone}<br></br>
            <strong>Correo:</strong>  {sangiUser.email}<br></br>
            <strong>Pais de residencia:</strong>  {sangiUser.country}<br></br>
            <strong>Dirección:</strong>  {sangiUser.address}<br></br>

        </p>
    </div>
                <div className="grid-container">
                {displaysangiObject(sangiUser.userObjects)}

                </div>
            <Footer/>
        </div>
    );
  }
}
UserInfo.contextType = PageContext
export default UserInfo;