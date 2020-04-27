import React, {useState} from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { withFirebase } from '../../components/Firebase';
import {StyledForm} from './styles';

const NewCar = (props) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onNewCar = (event) => {
    event.preventDefault();

    let uid = props.firebase.auth.currentUser.uid;
    props.firebase.cars().child(uid).push({
      // carId: uid,
      name: name,
      description: description
    });
    // props.firebase.cars().child(uid).child(uid).set({
    //   // carId: uid,
    //   name: name,
    //   description: description
    // });
    props.setShowModal(false);
  }
return (
  <StyledForm onSubmit={onNewCar}>
        <FormGroup controlId="name">
          <FormLabel>Name</FormLabel>
          <FormControl
            autoFocus
            type="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormGroup>
          <FormGroup controlId="name">
          <FormLabel>Name</FormLabel>
          <FormControl
            autoFocus
            type="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </FormGroup>
    {/* <input type='text' placeholder='name' value={name} onChange={(val) => setName(val.target.value)} /> */}
    {/* <input type='text' placeholder='description' value={description} onChange={(val) => setDescription(val.target.value)} /> */}
    {/* <input type='submit' value='Submit' /> */}
    <Button block type="submit">
          Submit
        </Button>
  </StyledForm>
)
}

export default withFirebase(NewCar);