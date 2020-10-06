import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Medicine from './Components/Medicine'; 
import { AddMedicineModal } from './Components/AddMedicineModal';

import {BrowserRouter, Route, Switch } from 'react-router-dom'
 
class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <h1> Medicine Tracking System</h1>
      
      
      <AddMedicineModal></AddMedicineModal>

    </div>
    <div className="Container">
      <Medicine></Medicine>
      </div>
    </BrowserRouter>     
  );
  }
}

export default App;
