import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NewUser from './components/NewUser';
import Home from './components/Home';
import NavBar from './components/NavBar';
import UserDetails from './components/UserDetails'
import EditProfile from './components/EditProfile';
import Profile from './components/Profile';



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Route path="/" exact component={Home}></Route>
          <Route path="/Profile" exact component={Profile}></Route>
          <Route path="/NewUser" component={NewUser}></Route>
          <Route path="/edit/:id" component={EditProfile}></Route>
          <Route path="/post/:id" component={UserDetails}></Route>
        </div>
      </BrowserRouter>
    )
  }
}
