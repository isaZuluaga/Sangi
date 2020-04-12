import React, { Component } from 'react';
import './App.css';
import './ObjectList.css';
import NavBar from './Components/NavBarComponent';
import Footer from './Components/FooterComponent';
import Card from './Components/CardComponent';
import lupa from './img/lupa.png';
import axios from "axios"; // for http requests to mongo db

class ObjectList extends Component {
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
       
    },
    data1: [],
    data2: []
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
    console.log(resp.data);
  //   var data1 = []
  //  data1 = resp.data[0].userObjects
  //   var data2 = []
  //  data2= resp.data[1].userObjects
   // console.log(resp.data[0].userObjects);
    // console.log(data2);
    console.log(resp.data);
    this.setState({
        sangiUser: resp.data[1],
        data1: [...resp.data[0].userObjects, ...resp.data[1].userObjects],
        data2: resp.data[1].userObjects
    });

})
.catch(()=>{
    console.log('internal server error')
})

}

displaysangiObject = (data1) =>{
if(!data1.length) return null;
return data1.map((userObj, index) =>(
    <Card key={index} name={userObj.objectName} objImg={userObj.objImgUrl} avaluoTxt={userObj.avaluo} descTxt={userObj.descrp} />
));

};
  render(){
    console.log('State: ',this.state.data1);

    return (
        <div>
            <NavBar/>
                <div className="filterInputContainer">
                    <img src={lupa} alt="searchIcon" id="searchImg"></img>
                    <input type="SearchInput" id="inputSearchText" name="find"></input>
                </div>
                <div className="grid-container">
                {this.displaysangiObject(this.state.data1)}
                </div>
            <Footer/>
        </div>
    );
  }
}
export default ObjectList;