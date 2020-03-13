import React from 'react';
import logo from './logo.svg';
import './global/App.css';
import Overview from './containers/Overview';
import Navbar from './containers/Navbar';
import Analytics from './containers/Analytics';
import Solutions from './containers/Solutions';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Overview/>
      <Analytics/>
      <Solutions/>
    </div>
  );
}

export default App;
