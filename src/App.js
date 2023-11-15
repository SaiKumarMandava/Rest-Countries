import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Countries from './components/countries'
import Nav from './components/nav'
import Population from './components/population'

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <div className=" bg-gray-200 ">   
    {/* <button onClick={toggleTheme}>click</button> */}
    {/* className={`App ${theme}`} */}
      <Nav/>
      {/* <Population/> */}
      {/* <Currency/> */}
    <Countries/>
    </div>
  );
}

export default App;
