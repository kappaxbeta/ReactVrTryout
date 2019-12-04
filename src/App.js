import React from 'react';
import './App.css';
import {Scene} from "aframe-react";

// Components
import Model from "./components/Model";
import Camera from "./components/Camera";
import Environment from "./components/Environment";

// Demo
// https://testing-task-4mtdc1u8h.now.sh/

function App() {
  return (
    <div className="App">
      <Scene>
          <Environment/>
          <Model/>
          <Camera />
      </Scene>
    </div>
  );
}

export default App;
