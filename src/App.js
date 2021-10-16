
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {

 const [mode,setMode] = useState('light');
//  const [homemode,setHomemode] = useState(
//    style = {
    
//    }
      
   

 const toggleMode = () =>{
      if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
      }else{
        setMode('light')
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
      }

 }

  return (
    <>
    
    <Router>
  
      <Navbar mode={mode} toggleMode={toggleMode}/>
    
      <Switch>


    
      <Route path="/textutills/">
         <Home  mode={mode} toggleMode={toggleMode} />  
     </Route>

     <Route exact path="/">
         <Home  mode={mode} toggleMode={toggleMode} />  
     </Route>

     <Route exact path="/about">
        <About/>
     </Route>
     
       
       </Switch>

     </Router>
    </>
  );
}

export default App;
