import React, { Component } from 'react';
import './App.css';
import './ObjectList.css';
import './UserInfo.css'
import NavBar from './Components/NavBarComponent';
import Footer from './Components/FooterComponent';
import Card from './Components/CardComponent';
import equipo from './img/equipo.png';
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
                imgUrl: ""

            }
        }

    componentDidMount() {
        this.getEmployee();
    }
    getEmployee(){
        axios({
            url: 'http://localhost:8080/api',
            method:'GET',

        })
        .then(resp => {
            console.log(resp.data[0]);
            this.setState({
                sangiUser: resp.data[0]
            });

        })
        .catch(()=>{
            console.log('internal server error')
        })

    }

  render(){
      console.log('State: ',this.state.sangiUser._id);

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
                <Card name='Objeto 2' />
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