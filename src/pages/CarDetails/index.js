import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { withFirebase } from '../../components/Firebase';
import ListServices from '../../screens/ListServices';


const ItemDetails = (props) => {
  const [car, setCar] = useState({});
  const [searchPattern, setSearchPattern] = useState('');

  const uid = props.firebase.auth.currentUser?.uid;
  const { carId } = useParams();
  
  useEffect(() => {
    props.firebase.cars().child(uid).child(carId).on('value', snapshot => {
      const currentCar = snapshot.val();
      setCar(currentCar);
  })
  }, [carId])

  const onAddService = (service) => {
    props.firebase.cars().child(uid).child(carId).child('services').push(service)
  };

  // const {carNumber, vin, model, year} = value;
return(
<div>
  <h2>{car.carNumber}</h2>
<div>
test
</div>
<div>
 {car.vin}
</div>
<div>
 {car.model}
</div>
<div>
 {car.year}
</div>
<div>
 <ListServices
  data={car.services}
  //setData={setCar} 
  onAddService={onAddService} 
  searchPattern={searchPattern} 
  setSearchPattern={setSearchPattern} />
</div>
</div>
)}

export default withFirebase(ItemDetails);