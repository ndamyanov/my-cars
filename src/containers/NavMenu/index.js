import React, {useEffect} from 'react';
//import { connect } from 'react-redux';
import {Container, MenuItem, MenuAction, ShippingCartItems, MenuItemSearch, SearchInput} from './styles';
import {Link} from "react-router-dom";

//myRef = React.createRef();

const NavMenu = (props) => {
  
  return(
  <Container>
    <MenuItem>
    <Link to="/">Home</Link>
    </MenuItem>
    <MenuItem>
    <Link to="/cars">Cars</Link>
    </MenuItem>
    <MenuItemSearch>
    <SearchInput type='text' placeholder='Search' />
    </MenuItemSearch>
    <MenuAction>
    <Link to="/login">Login</Link>
    </MenuAction>
    <MenuAction>
    <Link to="/register">Register</Link>
    </MenuAction>
    <MenuAction>
    <Link to="/">Logout</Link>
    </MenuAction>
  </Container>
)}

// const mapStateToProps = (state /*, ownProps*/) => {
//   return {
//     count: state.shoppingCart.count
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   addItem: () => {
//     dispatch({type: 'ADD'})
//   }
// })


// export default connect(
//   mapStateToProps,
//   null
// )(NavMenu)

export default NavMenu;