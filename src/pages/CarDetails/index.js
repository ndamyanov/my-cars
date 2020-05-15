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
    if(carId && uid) {
      props.firebase.cars().child(uid).child(carId).on('value', snapshot => {
        const currentCar = snapshot.val();
        setCar(currentCar);
    })
    }
  }, [carId, uid])

  const onAddService = (service) => {
    props.firebase.cars().child(uid).child(carId).child('services').push(service);
  };

  const onUpdateService = (service) => {
    let id = service.id;
    props.firebase.cars().child(uid).child(carId).child('services').child(id).set(service);
  };

  const onDeleteService = (service) => {
    let key = service.key;
    props.firebase.cars().child(uid).child(carId).child('services').child(key).remove();
  }

  // const {carNumber, vin, model, year} = value;
return(
<div>
  <h2>{car.carNumber}</h2>
  <h4>
 {car.username}
</h4>
<div>
 {car.vin}
</div>
<h4>
 {car.model}
</h4>
<h6>
 {car.year}
</h6>
<div>
 <ListServices
  data={car.services}
  //setData={setCar} 
  onAddService={onAddService} 
  onUpdateService={onUpdateService} 
  onDeleteService={onDeleteService} 
  searchPattern={searchPattern} 
  setSearchPattern={setSearchPattern} />
</div>
</div>
)}

export default withFirebase(ItemDetails);