import React from 'react';
//import { connect } from 'react-redux';
import {Container, MenuItem, MenuAction, MenuItemSearch, SearchInput} from './styles';
import {Link} from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import HomeIcon from '@material-ui/icons/Home';
import { withFirebase } from '../../components/Firebase';

//myRef = React.createRef();

const NavMenu = (props) => {
  const authNavigation = () => (
  <div>{props.authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>)
    
  const onExit = () => {
    console.log('exit')
    props.firebase.signOut();
  }

  const NavigationAuth = () => (
    <Container>
      <MenuItem>
        <Link to="/"><HomeIcon fontSize="large"/></Link>
      </MenuItem>
      <MenuItem>
        <Link to="/cars"><DriveEtaIcon fontSize="large" /></Link>
      </MenuItem>
      <MenuAction>
        
        <button type="submit" onClick={onExit}><ExitToAppIcon fontSize="large" /></button>
      </MenuAction>
    </Container>
  );

  const NavigationNonAuth = () => (
    <Container>
      <MenuItem>
        <Link to="/">Home</Link>
      </MenuItem>
      {/* <MenuItem>
        <Link to="/cars">Cars</Link> 
      </MenuItem> */}
      {/* <MenuItemSearch> */}
        {/* <SearchInput type='text' placeholder='Search' /> */}
      {/* </MenuItemSearch> */}
      <MenuAction>
        <Link to="/login">Login</Link>
      </MenuAction>
      <MenuAction>
        <Link to="/register">Register</Link>
      </MenuAction>
    </Container>
  );

  return(
    authNavigation()
)}

export default withFirebase(NavMenu);