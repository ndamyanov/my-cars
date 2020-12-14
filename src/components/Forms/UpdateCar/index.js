import React, {useState, useEffect} from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { withFirebase } from '../../Firebase';
import Modal from 'react-bootstrap/Modal'
import {StyledForm} from './styles';

const UpdateCar = (props) => {
  const {showModal, setShowModal, car} = props;
  const uid = props.firebase.auth.currentUser?.uid;

 const [username, setUsername] = useState(car.value ? car.value.username : '');
 const [carNumber, setCarNumber] = useState(car.value ? car.value.carNumber : '');
 const [vin, setVin] = useState(car.value ? car.value.vin : '');
 const [model, setModel] = useState(car.value ? car.value.model : '');
 const [year, setYear] = useState(car.value ? car.value.year : '');

  useEffect(() => {
   if(car.value) {
    const { username, carNumber, vin, model, year } = car.value;
    setUsername(username);
    setCarNumber(carNumber);
    setVin(vin);
    setModel(model);
    setYear(year);
   } 
  }, [car.value]);

  const validateForm = () => {
    return username.length > 0 
        && carNumber.length > 0 
        && vin.length > 0
        && model.length > 0
        && year.length > 0;
  }

  const onSubmitUpdate = (event) => {
    event.preventDefault();
    console.log(username);
    const car = {
      username: username,
      carNumber: carNumber,
      vin: vin,
      model: model,
      year: year
    };

    const carId = props.car.key;
    props.firebase.cars().child(uid).child(carId).set(car);

    props.setShowModal(false);
  }
return (


  <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Update Car
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <StyledForm onSubmit={onSubmitUpdate}>
        <FormGroup controlId="username">
          <FormLabel> Name</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="carNumber">
          <FormLabel>Car Number</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={carNumber}
            onChange={e => setCarNumber(e.target.value)}
          />
        </FormGroup>
          <FormGroup controlId="vin">
          <FormLabel>VIN</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={vin}
            onChange={e => setVin(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="model">
          <FormLabel>Model</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={model}
            onChange={e => setModel(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="year">
          <FormLabel>Year</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={year}
            onChange={e => setYear(e.target.value)}
          />
        </FormGroup>
    <Button block type="submit" disabled={!validateForm()}>
          Update
        </Button>
  </StyledForm>
        </Modal.Body>
      </Modal>
)
}

export default withFirebase(UpdateCar);