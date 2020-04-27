import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavMenu from './containers/NavMenu';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cars from './pages/Cars';
import ItemDetails from './screens/ItemDetails';
import { withFirebase } from './components/Firebase';

function App(props) {

  const [authUser, setAuthUser] = useState(null);

 useEffect(() => {
      props.firebase.auth.onAuthStateChanged(authUser => {
        if (authUser && !authUser.emailVerified) {
          authUser.sendEmailVerification();
        }
 
           setAuthUser(authUser)
      });
  },[authUser, props.firebase.auth])

  return (
    <div className="App">
        <Router>
        <NavMenu authUser={authUser} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
         
          <Route path='/cars' component={Cars} />
          <Route path="/car/:carId" component={ItemDetails} />


        </Switch>
        </Router>
    </div>
  );
}

export default withFirebase(App);
