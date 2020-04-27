import React from 'react';
// import { connect } from "react-redux";
import {StyledCard, Title} from './styles';
import {Link} from "react-router-dom";
import ForwardRoundedIcon from '@material-ui/icons/ForwardRounded';
// import {addItem} from '../../reducers/actions';

const ItemOverview = (props) => {
  //const {title, price, quantity, imgSrc} = props.data;
  //const {carId, name, description} = props.data.value;
  const {key, value} = props.data;
  const {carNumber, vin, model, year} = value;

  return (
    <StyledCard>
      <Link to={{pathname: `/car/${key}` }}><Title>{carNumber}</Title></Link>
      <div>{vin}</div>
      <div><Link to={{pathname: `/car/${key}` }}><ForwardRoundedIcon fontSize="large" /></Link></div>

      <div>{model}</div>
      <div>{year}</div>

  </StyledCard>
  )
}

export default ItemOverview;

// export default connect(
//   null,
//   {addItem}
// )(ItemCard);