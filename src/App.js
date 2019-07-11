import React from 'react';
import Counter from './Counter.js';
import Map from './Map.js';
import './App.css';
import MaterialButtons from './MaterialButtons.js';
import MaterialSwitches from './MaterialSwitches.js';
import MaterialContainer from './MaterialContainer.js';
import MaterialCheckBox from './MaterialCheckBox.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <MaterialButtons/>
      <MaterialSwitches/>
      <MaterialContainer />
      <MaterialCheckBox/>
      <Counter/>
      <Map />
    </div>
  );
}

export default App;
