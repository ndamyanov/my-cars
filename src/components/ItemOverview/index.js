import React from 'react';
// import { connect } from "react-redux";
import {StyledCard,} from './styles';
import {Link} from "react-router-dom";
// import {addItem} from '../../reducers/actions';

const ItemOverview = (props) => {
  //const {title, price, quantity, imgSrc} = props.data;
  //const {carId, name, description} = props.data.value;
  const {key, value} = props.data;
  const {carId, name, description} = value;
  
  // const onDetails = () => {
  //   console.log('details')
  //   //props.addItem(data);
  // }

  return (
    <StyledCard>
      <h2>{carId}</h2>
      <h2>{name}</h2>
      <div>{description}</div>
      {/* <button onClick={() => onDetails(props.data)}>Details</button> */}
      {/* <div> <Link to={{pathname: "/car/", car: props.data.value}}>Details</Link></div> */}
      <div> <Link to={{pathname: `/car/${key}` }}>Details</Link></div>
      {/* <div> <Link to="/client" >Details</Link></div> */}
  </StyledCard>
  )
}

// const mapDispatchToProps = (dispatch) => ({
//   addItem: (data) => {
//     dispatch({type: 'ADD'}, data)
//   }
// })

export default ItemOverview;

// export default connect(
//   null,
//   {addItem}
// )(ItemCard);