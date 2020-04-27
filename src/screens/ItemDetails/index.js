import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { withFirebase } from '../../components/Firebase';


const ItemDetails = (props) => {
console.log('render')
  const { carId } = useParams();
  const uid = props.firebase.auth.currentUser?.uid;
  const [car, setCar] = useState({});

  // let { testvalue } = useParams();
  // const { name, description } = props.location.car;
  //console.log(car);
  
  //let isAuthenticated = props.firebase.auth.currentUser === null;
  
  useEffect(() => {
    console.log('use effect')
    debugger;
    props.firebase.cars().child(uid).child(carId).on('value', snapshot => {
      const currentCar = snapshot.val();

      setCar(currentCar);
  })
  }, [carId])


return(
<div>
  <h2>test</h2>
<div>
test
</div>
<div>
 {car.name}
</div>
<div>
 {car.description}
</div>
<div>
 test
</div>
</div>
)}

export default withFirebase(ItemDetails);