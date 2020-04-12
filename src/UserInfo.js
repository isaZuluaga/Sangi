import React, { Component } from 'react';
import './App.css';
import './ObjectList.css';
import './UserInfo.css'
import NavBar from './Components/NavBarComponent';
import Footer from './Components/FooterComponent';
import Card from './Components/CardComponent';
import axios from "axios"; // for http requests to mongo db


class UserInfo extends Component {
        state = {
            sangiUser:{
                _id: "",
                fullName: "",
                CC: "",
                cellphone: "",
                address:"",
                email: "",
                country:"",
                imgUrl: "",
                userObjects:[]
            }
        }

    componentDidMount() {
        this.getSangiUser();
    }
    getSangiUser(){
        axios({
            url: 'http://localhost:8080/api',
            method:'GET',

        })
        .then(resp => {
            console.log(resp.data[1]);
            this.setState({
                sangiUser: resp.data[1]
            });

        })
        .catch(()=>{
            console.log('internal server error')
        })

    }

    displaysangiObject = (userObjects) =>{
        if(!userObjects.length) return null;
        return userObjects.map((userObj, index) =>(
            <Card key={index} name={userObj.objectName} objImg={userObj.objImgUrl} avaluoTxt={userObj.avaluo} descTxt={userObj.descrp} />
        ));

    };
  render(){
      console.log('State: ',this.state.sangiUser.userObjects);

    return (
        <div>
            <NavBar/>
            <div className="userInfoContainer">
        <img src={this.state.sangiUser.imgUrl} alt="userImg" id="userImg"></img>
        <p id="userDescription">
            <h2>{this.state.sangiUser.fullName}</h2> <br></br>
            <strong>Cedula:</strong>  {this.state.sangiUser.CC}<br></br>
            <strong>Celular: </strong>  {this.state.sangiUser.cellphone}<br></br>
            <strong>Correo:</strong>  {this.state.sangiUser.email}<br></br>
            <strong>Pais de residencia:</strong>  {this.state.sangiUser.country}<br></br>
            <strong>Dirección:</strong>  {this.state.sangiUser.address}<br></br>

        </p>
    </div>
                <div className="grid-container">
                {this.displaysangiObject(this.state.sangiUser.userObjects)}

                </div>
            <Footer/>
        </div>
    );
  }
}
export default UserInfo;