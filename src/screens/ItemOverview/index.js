import React from 'react';
import { connect } from "react-redux";
import {StyledCard,} from './styles';
import {addItem} from '../../reducers/actions';

const Item = (props) => {
  //const {title, price, quantity, imgSrc} = props.data;
  debugger;
  const {name, description} = props.data.value;
  
  const onDetails = () => {
    console.log('details')
    //props.addItem(data);
  }

  return (
    <StyledCard>
      <h2>{name}</h2>
      <div>{description}</div>
      <button onClick={() => onDetails(props.data)}>Details</button>
  </StyledCard>
  )
}

// const mapDispatchToProps = (dispatch) => ({
//   addItem: (data) => {
//     dispatch({type: 'ADD'}, data)
//   }
// })

export default Item;

// export default connect(
//   null,
//   {addItem}
// )(ItemCard);