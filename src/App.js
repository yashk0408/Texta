import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom"

export default function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert(
      {
        msg:message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled","success");
      document.title="Texta-Dark mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled","success");
      document.title="Texta-Light mode"
    } 
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="Texta" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
    <Routes>
          <Route path="/home" element={<TextForm showAlert={showAlert} heading="Try Texta - word counter, character counter, remove extra spaces" mode={mode}/>}/>
    <Route path="/about" element={<About mode={mode} />} />
    </Routes>
    </div></BrowserRouter>
    </> 
  )}
