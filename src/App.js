import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ObjectList from './ObjectList';
import ObjectInfo from './ObjectInfo'
import UserInfo from './UserInfo'
import LandingPage from './LandingPage'

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={LandingPage} />
            <Route exact path="/objectlist" component={ObjectList} />
            <Route exact path="/userinfo" component={UserInfo} />
            <Route exact path="/objectInfo" component={ObjectInfo} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}
export default App;
