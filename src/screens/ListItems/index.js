import React, {useEffect, useState} from 'react';
import ItemOverview from '../ItemOverview';
import {Container, AddButton, SearchInput, SearchField, StyledSearchIcon} from './styles';
import { withFirebase } from '../../components/Firebase';              
import Modal from 'react-bootstrap/Modal'
import NewCar from '../NewCar';
import { Add } from '@material-ui/icons';

const ListItems = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [cars, setCars] = useState([]);
  const [searchText, setSearchText] = useState([]);

  let isAuthenticated = props.firebase.auth.currentUser === null;
  let uid = props.firebase.auth.currentUser?.uid;

useEffect(() => {
    props.firebase.carsOfUser(uid).on('value', snapshot => {
      const userCars = snapshot.val();
      debugger;

      let carsList = Object.values(userCars).map(val => ({
        ...userCars[val],
        key:  Object.keys(userCars).find(key => userCars[key] === val),
        value: val,
      }));
  
      if(searchText.length > 0) {
        carsList = carsList.filter(c => c.value.name.includes(searchText));
      }

      setCars(carsList)
  
      // return () => {
      //   props.firebase.cars().off();
      // }
    })
}, [searchText, props.firebase, uid]);

return(
  <Container>
    <SearchField>
        <StyledSearchIcon />
        <SearchInput type='text' value={searchText} onChange={(event) => setSearchText(event.target.value)} />
    </SearchField>

    <AddButton hidden={isAuthenticated} onClick={() => setShowModal(true)}><Add fontSize="large" /></AddButton>
    <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Add new car
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewCar setShowModal={setShowModal} />
        </Modal.Body>
      </Modal>
    {cars.map(i => (<ItemOverview data={i} key={i.value.name}></ItemOverview>))}
  </Container>
)
}

export default withFirebase(ListItems);