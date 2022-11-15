import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import SignUp from './Components/SignUp';
import { Route, Routes } from 'react-router-dom';
import { NoMtach } from './Components/NoMatch';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import { Profile } from './Components/Profile';
import CheckLogIn from './Components/CheckLogIn';
import NotLoggedUser from './Components/NotLoggedUser';
import Order from './Components/Order';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchString: ""
    }
    this.setSearchString = this.setSearchString.bind(this);
  }

  setSearchString(string) {
    console.log(string)
    this.setState({
      searchString: string
    })
  }

  render() {
    return (
      <>
        <Navbar setSearchString={this.setSearchString} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CheckLogIn name={(isLoggedIn) => isLoggedIn ? <Cart /> : <NotLoggedUser />} />} />
          <Route path='/profile' element={<CheckLogIn name={(isLoggedIn) => isLoggedIn ? <Profile /> : <NotLoggedUser />} />} />
          <Route path='/login' element={<SignUp />} />
          <Route path='/notLoggedMessage' element={<NotLoggedUser />} />
          <Route path='/order' element={<CheckLogIn name={(isLoggedIn) => isLoggedIn ? <Order /> : <NotLoggedUser />} />} />
          <Route path='*' element={<NoMtach />} />
        </Routes>
      </>
    )
  }
}

export default App;
