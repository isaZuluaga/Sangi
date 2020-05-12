import React, { Component } from 'react';
import { PageProvider } from '../context/pageContext'
import '../App.js';
import ObjectInfo from '../ObjectInfo'
import ObjectList from '../ObjectList';


export default class ObjListPage extends Component {
  render() {
    return (
      <div className="App">
        <PageProvider>
            <ObjectList/>
            <ObjectInfo/>
        </PageProvider>
      </div>
    )
  }
}
