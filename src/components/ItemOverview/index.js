import React from 'react';
// import { connect } from "react-redux";
import {StyledCard, Title} from './styles';
import {Link} from "react-router-dom";
import ForwardRoundedIcon from '@material-ui/icons/ForwardRounded';
import BuildIcon from '@material-ui/icons/Build';

// import {addItem} from '../../reducers/actions';

const ItemOverview = (props) => {
  //const {title, price, quantity, imgSrc} = props.data;
  //const {carId, name, description} = props.data.value;
  const {key, value} = props.data;
  const {username, carNumber, vin, model, year} = value;
  const {onUpdateCarClick} = props

  return (
    <StyledCard>
      <Link to={{pathname: `/car/${key}` }}><Title>{carNumber} - {username}</Title></Link>
      <div>{vin}</div>
      <div>
        <Link to={{pathname: `/car/${key}` }}><ForwardRoundedIcon fontSize="large" /></Link>
      </div>
      <h6>{model}</h6>
      <div>{year}</div>
      <div>
        <BuildIcon onClick={onUpdateCarClick} fontSize="medium"/>
      </div>
  </StyledCard>
  )
}

export default ItemOverview;

// export default connect(
//   null,
//   {addItem}
// )(ItemCard);