import React from 'react';
import ReactDOM from 'react-dom';

// I know its better to put this into the HTML file
// some possible solutions, easy one include the node_modules folder in the index.html
// or more challenging adjust webpack to include it
import 'aframe';
import 'aframe-extras';
import 'aframe-star-system-component';

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
