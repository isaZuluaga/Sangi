import React, { Component } from 'react'
import '../App.js';
import '../ObjectList.css';
import '../UserInfo.css'
import axios from "axios"; // for http requests to mongo db

const PageContext = React.createContext();

class PageProvider extends Component {
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
    selectedObj:{
        objectName:"lol",
        objImgUrl:"lol",
        avaluo:"67",
        descrp:"loll"

    },
    showLandingPage:true,
    showObjectList: true,
    showUserInfo:true,
    showObjectInfo:false,

    data1: [],
    data2: []

}

componentDidMount() {
this.getSangiUser();
this.getSangiObjectList();
}
getSangiObjectList(){
  axios({
      url: 'http://localhost:8080/api',
      method:'GET',

  })
  .then(resp => {
      console.log(resp.data);
      console.log(resp.data);
      this.setState({
          data1: [...resp.data[0].userObjects, ...resp.data[1].userObjects],
          data2: resp.data[1].userObjects
      });

  })
  .catch(()=>{
      console.log('internal server error')
  })

  }

  displaysangiObjectList = (data1) =>{
  if(!data1.length) return null;
  return data1.map((userObj, index) =>(
      <div key={index}>
      <div className="grid-item">
                  <h5 className="objectName">{userObj.objectName}</h5>
                  <img src={userObj.objImgUrl} alt="objectImg" className="ObjImg"></img>
                  <p className="objDescription">
                  <strong>Avaluo:</strong>  {userObj.avaluo}<br></br>
                  <strong>Descripción:</strong> <br></br>  {userObj.descrp}<br></br>
                  </p>
                       <button  className="proposeButton" onClick={this.setObjInfoInState(userObj)}>Proponer</button>

              </div>
      </div>
  ));

  };
getSangiUser(){
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

setObjInfoInState = (obj) => (e) => {
  const{selectedObj} = this.state
e.preventDefault()
this.setState({
  selectedObj: obj ,
  showUserInfo: false,
  showObjectInfo:true,
  showObjectList: false

})
console.log('obj escuchado:',selectedObj)
}
displaysangiObject = (userObjects) =>{
if(!userObjects.length) return null;
return userObjects.map((userObj, index) =>(
    <div key={index}>
    <div className="grid-item">
                <h5 className="objectName">{userObj.objectName}</h5>
                <img src={userObj.objImgUrl} alt="objectImg" className="ObjImg"></img>
                <p className="objDescription">
                <strong>Avaluo:</strong>  {userObj.avaluo}<br></br>
                <strong>Descripción:</strong> <br></br>  {userObj.descrp}<br></br>
                </p>
                     <button  className="proposeButton" onClick={this.setObjInfoInState(userObj)}>Proponer</button>

            </div>

    </div>
));


};
  render() {
    const { children } = this.props
    return (
      <PageContext.Provider value={{
        ...this.state,
        getSangiUser: this.getSangiUser,
        setObjInfoInState: this.setObjInfoInState,
        displaysangiObject: this.displaysangiObject,
        getSangiObjectList: this.getSangiObjectList,
        displaysangiObjectList: this.displaysangiObjectList

      }}>
        { children }
      </PageContext.Provider>
    )
  }
}

const PageConsumer = PageContext.Consumer;

export { PageContext, PageProvider, PageConsumer }
