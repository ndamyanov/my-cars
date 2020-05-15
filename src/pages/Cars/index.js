import React, {useState, useEffect} from 'react';
import {Container, AddButton} from './styles';
import { withFirebase } from '../../components/Firebase';
import Search from '../../components/SearchField'; 
import NewCar from '../../components/Forms/NewCar'; 
import UpdateCar from '../../components/Forms/UpdateCar'; 
import ItemOverview from '../../components/ItemOverview'; 
import { Add } from '@material-ui/icons';

const Cars = (props) => {

  const [cars, setCars] = useState([]);
  const [searchPattern, setSearchPattern] = useState('');
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [carToUpdate, setCarToUpdate] = useState({});

  const uid = props.firebase.auth.currentUser?.uid;
  const isAuthenticated = props.firebase.auth.currentUser === null;

  const onUpdateCarClick = (currentCar) => {
    setCarToUpdate(currentCar);
    setShowModalUpdate(true);
  }

  useEffect(() => {
    props.firebase.carsOfUser(uid).on('value', snapshot => {
      const userCars = snapshot.val();
      let carsList = [];
      if(userCars) {
        carsList = Object.values(userCars).map(val => ({
          ...userCars[val],
          key:  Object.keys(userCars).find(key => userCars[key] === val),
          value: val,
        }));
      }

      //filter
      if(searchPattern.length > 0) {
        carsList = carsList.filter(c => 
             c.value.carNumber.includes(searchPattern)
          || c.value.vin.includes(searchPattern));
      }

      setCars(carsList)
    })
}, [props.firebase, uid, searchPattern]);

return (
  <Container>
    {/* <ListItems data={cars} setData={setCars} searchPattern={searchPattern} setSearchPattern={setSearchPattern} /> */}
    <Search searchPattern={searchPattern} setSearchPattern={setSearchPattern} />

    <AddButton hidden={isAuthenticated} onClick={() => setShowModalCreate(true)}><Add fontSize="large" /></AddButton>
    
    <NewCar showModal={showModalCreate} setShowModal={setShowModalCreate} />

    <UpdateCar 
        showModal={showModalUpdate} 
        setShowModal={setShowModalUpdate} 
        car={carToUpdate} />

    {cars.map(i => (
    <ItemOverview 
    data={i} 
    key={i.value.carNumber} 
    setShowModal={setShowModalUpdate}
    onUpdateCarClick={() => onUpdateCarClick(i)}>
    </ItemOverview>
    ))}
    
  </Container>
)
}

export default withFirebase(Cars);