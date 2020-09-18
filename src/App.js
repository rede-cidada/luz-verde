import React from 'react';
import './App.css';
import Aquecedor from './components/Aquecedor/Aquecedor';
import Menu from './components/Menu/Menu.js';


function App()  {
  return (
    <div className="App">
      <Menu />
      <Aquecedor/>
    </div>
  );
}

export default App;
