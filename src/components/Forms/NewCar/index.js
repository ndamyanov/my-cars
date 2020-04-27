import React, {useState} from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { withFirebase } from '../../Firebase';
import Modal from 'react-bootstrap/Modal'
import {StyledForm} from './styles';

const NewCar = (props) => {

  const [carNumber, setCarNumber] = useState('');
  const [vin, setVin] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const {showModal, setShowModal} = props;

  const validateForm = () => {
    return carNumber.length > 0 
        && vin.length > 0
        && model.length > 0
        && year.length > 0;
  }

  const onNewCar = (event) => {
    event.preventDefault();

    let uid = props.firebase.auth.currentUser.uid;
    props.firebase.cars().child(uid).push({
      carNumber: carNumber,
      vin: vin,
      model: model,
      year: year,
    });

    // props.firebase.cars().child(uid).child(uid).set({
    //   // carId: uid,
    //   name: name,
    //   description: description
    // });
    props.setShowModal(false);
  }
return (


  <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Add new Car
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <StyledForm onSubmit={onNewCar}>
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
          Submit
        </Button>
  </StyledForm>
        </Modal.Body>
      </Modal>
)
}

export default withFirebase(NewCar);