// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleDarkMode = () => {
    if (mode === "red" || mode === 'dark' || mode === 'blue') {
      setMode("light");
      document.body.style.backgroundColor = 'white'
      showAlert("success", "Light Mode has been Enabled")
      // document.title = "Light Mode"   //Changes the title of website dynamically
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = 'black'
      showAlert("success", "Dark Mode has been Enabled")
      // document.title = "Dark Mode"
    }
  }
  const toggleRedMode = () => {
    if (mode === "red" || mode === 'dark' || mode === 'blue') {
      setMode("light");
      document.body.style.backgroundColor = 'white'
      showAlert("success", "Light Mode has been Enabled")
    }
    else {
      setMode("red");
      document.body.style.backgroundColor = '#aa3030'
      showAlert("success", "Red Mode has been Enabled")
    }
  }
  const toggleBlueMode = () => {
    if (mode === "red" || mode === 'dark' || mode === 'blue') {
      setMode("light");
      document.body.style.backgroundColor = 'white'
      showAlert("success", "Light Mode has been Enabled")
    }
    else {
      setMode("blue");
      document.body.style.backgroundColor = 'blue'
      showAlert("success", "Blue Mode has been Enabled")
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar  title="Textutils" mode = {mode} toggledarkmode = {toggleDarkMode} toggleredmode = {toggleRedMode} togglebluemode = {toggleBlueMode}/>
        <Alert alert={alert} />
        {/* <Routes> */}
          {/* <Route path="/about" element={ */}
          {/* <About mode = {mode} toggledarkmode = {toggleDarkMode} toggleredmode = {toggleRedMode} togglebluemode = {toggleBlueMode}/> */}
          {/* }> */}
          {/* </Route> */}
          {/* <Route path="/" element={ */}
          <TextForm heading="Enter Your text here" mode={mode} toggledarkmode={toggleDarkMode} toggleredMode={toggleRedMode} showalert={showAlert} />
          {/* }> */}
          {/* </Route> */}
        {/* </Routes> */}
      {/* <Alert alert={alert} /> */}
      {/* </Router> */}
    </>
  );
}

export default App;
