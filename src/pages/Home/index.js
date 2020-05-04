import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';

const Home = () => {
  return (
    <div className="App">
    <header className="App-header">
      <SettingsIcon style={{ fontSize: 200 }} className="App-logo" alt="logo" />

      <a className="App-link" href="#" target="_blank" >
        My Cars
      </a>
    </header>
  </div>
  )
}

export default Home;