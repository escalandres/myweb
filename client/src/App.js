import React, { useState } from 'react';
import Cookies from 'universal-cookie';

import Auth from './components/Auth';
import MyWeb from './components/MyWeb';

import logo from './logo.svg';
import './App.css';

const cookies = new Cookies();
const authToken = cookies.get("token");

if(authToken){
  const user = {
    username: cookies.get('username'),
    hashedPassword: cookies.get('hashedPassword'),
    key: cookies.get('key')
  }
  
}

function App() {
  // if(!authToken) return <Auth />
  return (
    <div className="App">
      
      {/* <MyWeb /> */}
      <Auth />
      
    </div>
  );
}

export default App;
