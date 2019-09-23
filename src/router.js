import React, {Component} from 'react';
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import Login from "./containers/login/Login";
import Profile from "./containers/profile/Profile";

const loggedIn = localStorage.getItem('loggedIn');

export default (
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={()=>(
          loggedIn ? (
            <Profile/>
          ) : (
            <Login/>
          )
        )}/>
      </Switch>
    </BrowserRouter>
  </div>
);