import React from 'react';
import logo from '../../logo.svg';
import SettingsIcon from '@material-ui/icons/Settings';


const Home = () => {
  return (
    <div className="App">
    <header className="App-header">
      <SettingsIcon style={{ fontSize: 200 }} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        My Cars
      </a>
    </header>
  </div>
  )
}

export default Home;