import React, {Component} from 'react';
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import {Login} from "./containers/login/Login";

export default (
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
      </Switch>
    </BrowserRouter>
  </div>
);