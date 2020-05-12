import React, { Component } from 'react';
import { PageProvider } from '../context/pageContext'
import '../App.js';
import ObjectInfo from '../ObjectInfo'
import UserInfo from '../UserInfo'


export default class Page extends Component {
  render() {
    return (
      <div className="App">
        <PageProvider>
            <UserInfo/>
            <ObjectInfo/>
        </PageProvider>
      </div>
    )
  }
}
