import React, { useState } from 'react';
import Cookies from 'universal-cookie';

import {Auth, MyWeb} from './components';



import logo from './logo.svg';
import './App.css';

const cookies = new Cookies();

const apiKey = 'sh7kywnkfxhv';
const authToken = cookies.get("token");

if(authToken){
  const user = {
    username: cookies.get('username'),
    hashedPassword: cookies.get('hashedPassword'),
    key: cookies.get('key')
  }
  
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header>
      <nav>
        
      </nav>
      <main>
        
      </main> */}

      
    </div>
  );
}

export default App;
