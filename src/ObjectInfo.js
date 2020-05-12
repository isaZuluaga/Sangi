import React, { Component } from 'react';
import './App.css';
import './ObjectList.css';
import './ObjectInfo.css'
import NavBar from './Components/NavBarComponent';
import Footer from './Components/FooterComponent';
import ObjectInfoComp from './Components/ObjectInfoComponent'
import { PageContext } from './context/pageContext'


class ObjectInfo extends Component {

  render(){
    const { getSangiUser,setObjInfoInState,displaysangiObject,userObjects,sangiUser,selectedObj,showObjectInfo} = this.context
    const showHideClassName = showObjectInfo ? "display-block" : "display-none";
    console.log('object info hi from objectinfo page ', selectedObj)
    return (
        <div className={showHideClassName}>
            <NavBar/>
            <ObjectInfoComp name={selectedObj.objectName} objUrl={selectedObj.objImgUrl} objDescription={selectedObj.descrp}  />
            <Footer/>
        </div>
    );
  }
}
ObjectInfo.contextType = PageContext
export default ObjectInfo;