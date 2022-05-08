import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NewUser from './components/NewUser';
import Home from './components/Home';
import NavBar from './components/NavBar';
import UserDetails from './components/UserDetails'
import EditProfile from './components/EditProfile';
import Profile from './components/Profile';
import Feedback from './client/Feedback';
import Addpaypal from './payment/Addpaypal';
import Addcard from './payment/Addcard';
import Editpaypal from './payment/Editpaypal';
import Allemail from './payment/Allemail';
import Payhome from './payment/Payhome';
import Allcard from './payment/Allcard';

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
          <Route path="/feed" component={Feedback}></Route>
          <Route path="/paypal" component={Addpaypal}></Route>
          <Route path="/cardpay" component={Addcard}></Route>
          <Route path="/uppaypal/:id" component={Editpaypal}></Route>
          {/* <Route path="/upcardpay/:id" component={Allcard}></Route> */}
          <Route path="/allemails" component={Allemail}></Route>
          <Route path="/allcard" component={Allcard}></Route>
          <Route path="/payhome" component={Payhome}></Route>
        </div>
      </BrowserRouter>
    )
  }
}
