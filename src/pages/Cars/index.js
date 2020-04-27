import React, {useState, useEffect} from 'react';
import {Container, AddButton} from './styles';
import { withFirebase } from '../../components/Firebase';
import Search from '../../components/SearchField'; 
import NewCar from '../../components/Forms/NewCar'; 
import ItemOverview from '../../components/ItemOverview'; 
import { Add } from '@material-ui/icons';

const Cars = (props) => {

  const [cars, setCars] = useState([]);
  const [searchPattern, setSearchPattern] = useState('');
  const [showModal, setShowModal] = useState(false);

  const uid = props.firebase.auth.currentUser?.uid;
  const isAuthenticated = props.firebase.auth.currentUser === null;


  useEffect(() => {
    props.firebase.carsOfUser(uid).on('value', snapshot => {
      const userCars = snapshot.val();

      let carsList = Object.values(userCars).map(val => ({
        ...userCars[val],
        key:  Object.keys(userCars).find(key => userCars[key] === val),
        value: val,
      }));

      //filter
      if(searchPattern.length > 0) {
        carsList = carsList.filter(c => c.value.name.includes(searchPattern));
      }

      setCars(carsList)
    })
}, [props.firebase, uid, searchPattern]);

return (
  <Container>
    {/* <ListItems data={cars} setData={setCars} searchPattern={searchPattern} setSearchPattern={setSearchPattern} /> */}
    <Search searchPattern={searchPattern} setSearchPattern={setSearchPattern} />

    <AddButton hidden={isAuthenticated} onClick={() => setShowModal(true)}><Add fontSize="large" /></AddButton>
    
    <NewCar showModal={showModal} setShowModal={setShowModal} />

    {cars.map(i => (<ItemOverview data={i} key={i.value.name}></ItemOverview>))}
    
  </Container>
)
}

export default withFirebase(Cars);