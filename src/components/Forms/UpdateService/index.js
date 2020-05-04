import React, {useState, useEffect} from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { withFirebase } from '../../Firebase';
import Modal from 'react-bootstrap/Modal'
import {StyledForm} from './styles';

const UpdateService = (props) => {
  debugger;
  const {showModal, setShowModal, onUpdateService, service} = props;
 // const { date, description, km } = service;

  const [date, setDate] = useState(service.value ? service.value.date : '');
  const [description, setDescription] = useState(service.value ? service.value.description : '');
  const [km, setKm] = useState(service.value ? service.value.km : '');

  useEffect(() => {
   if(service.value) {
    const { date, description, km } = service.value;
    setDate(date);
    setDescription(description);
    setKm(km);
   } 
   

  }, [service.value]);

  const validateForm = () => {
    return date !== ''
        && km && km.length > 0
        && description && description.length > 0;
  }

  const onSubmitUpdate = (event) => {
    event.preventDefault();

    onUpdateService({
       id: service.key, 
       date: date,
       description: description,
       km: km
      })

    props.setShowModal(false);
  }
return (

  <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
           Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <StyledForm onSubmit={onSubmitUpdate}>
        <FormGroup controlId="date">
          <FormLabel>Date</FormLabel>
          <FormControl
            autoFocus
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </FormGroup>
          <FormGroup controlId="description">
          <FormLabel>Description</FormLabel>
          <FormControl as="textarea"
            style={{height: '10em'}}
            autoFocus
            type="textarea"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="km">
          <FormLabel>km</FormLabel>
          <FormControl
            autoFocus
            type="number"
            value={km}
            onChange={e => setKm(e.target.value)}
          />
        </FormGroup>

    <Button block type="submit" disabled={!validateForm()}>
          Save
        </Button>
  </StyledForm>
        </Modal.Body>
      </Modal>
)
}

export default withFirebase(UpdateService);