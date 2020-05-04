import React, {useState} from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { withFirebase } from '../../Firebase';
import Modal from 'react-bootstrap/Modal'
import {StyledForm} from './styles';

const NewService = (props) => {

  const [date, setDate] = useState(new Date().toLocaleDateString('fr-CA'));
  const [description, setDescription] = useState('');
  const [km, setKm] = useState('');
  const {showModal, setShowModal, onAddService} = props;

  const validateForm = () => {
    return date !== ''
        && km.length > 0
        && description.length > 0;
  }

  const onNewService = (event) => {
    event.preventDefault();
  
    onAddService({date: date,
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
            Add new Service
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <StyledForm onSubmit={onNewService}>
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
            type="text"
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
          Submit
        </Button>
  </StyledForm>
        </Modal.Body>
      </Modal>
)
}

export default withFirebase(NewService);