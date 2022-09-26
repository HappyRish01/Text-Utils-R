import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import './App.css';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter,Routes,Route} from 'react-router-dom';




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert("");
    }, 500);
  };
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode Enabled';

      // setTimeout(() => {
      //   document.title = 'Text utils is Amazing';
      //   console.log("Hello i am first");
      // }, 2000);
      // setTimeout(() => {
      //   document.title = 'Install text utils now';
      //   console.log("Hello i am Second");
      // }, 1500);

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light mode Enabled';

    }
  };
  return (
    <>
    
      <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="mx-3">
        <Routes>
          <Route exact path="/about" element = {<About />}/>
          <Route exact path="/" element = {<TextForm showAlert = {showAlert}heading = "Enter the text to analyse below " mode = {mode}/>}/>
        </Routes>
      </div>
        </BrowserRouter>

    </>
  );
}

export default App;
