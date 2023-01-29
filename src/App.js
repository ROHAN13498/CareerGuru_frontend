import logo from './logo.svg';
import React,{Component} from "react";
import './App.css';
import Greetings from './Greetings';
import Navigation from './components/Navigation';
import Navigation1 from './components/Navigation1';
import Jobbox from './components/Jobbox';
import {Routes, Route} from 'react-router-dom'
import { Home } from './components/Home';
import { Postlogin1 } from './components/Postlogin1';
import { Postlogin2 } from './components/Postlogin2';
function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element ={<Home/>}> </Route>
        <Route path='1' element={<Postlogin1/>} ></Route>
        <Route path='2' element={<Postlogin2/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App;
