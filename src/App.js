import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavMenu from './containers/NavMenu';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cars from './pages/Cars';

function App() {
  return (
    <div className="App">
      <body>
        <Router>
        <NavMenu />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />

          <Route path='/cars' component={Cars} />
        </Switch>
        </Router>
      </body>
    </div>
  );
}

export default App;
