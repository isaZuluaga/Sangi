import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ObjectList from './ObjectList';
import ObjectInfo from './ObjectInfo'
import LandingPage from './LandingPage'
import Page from './Components/Page'
import ObjListPage from './Components/ObjListPage'
import history from './history';

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter history={history}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={LandingPage} />
            <Route exact path="/objectlist" component={ObjectList} />
            <Route exact path="/objectInfo" component={ObjectInfo} />
            <Route exact path="/profile" component={Page} />
            <Route exact path="/start" component={ObjListPage} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}
export default App;
