import React, {useEffect, useState} from 'react';
import {Container, AddButton, StyledCard, ListContainer, Date, Km, Description, Icons} from './styles';
import Search from '../../components/SearchField';
import { withFirebase } from '../../components/Firebase';           

import NewService from '../../components/Forms/NewService';
import UpdateService from '../../components/Forms/UpdateService';
import { Add } from '@material-ui/icons';
import BuildIcon from '@material-ui/icons/Build';
import DeleteIcon from '@material-ui/icons/DeleteForever';

const ListServices = (props) => {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [services, setServices] = useState([]);
  const [serviceToUpdate, setServiceToUpdate] = useState({});

  // const [searchText, setSearchText] = useState([]);

  let {data, searchPattern, setSearchPattern, onAddService, onUpdateService, onDeleteService} = props;
  let isAuthenticated = props.firebase.auth.currentUser === null;
  //let listItems = props.data;

  const onUpdate = (currentService) => {
    setShowModalUpdate(true);
    setServiceToUpdate(currentService);
  }

  const onDelete = (serviceToDelete) => {
    let confirm = window.confirm('Delete service?')

    if(confirm) {
      onDeleteService(serviceToDelete)
    }
  } 

  const compareDesc = (a, b) => {
    if ( a.value.date > b.value.date ){
      return -1;
    }
    if ( a.value.date < b.value.date ){
      return 1;
    }
    return 0;
  }

useEffect(() => {
  let tempList;
      if(data){
        tempList = Object.values(data).map(val => ({
          ...data[val],
          key:  Object.keys(data).find(key => data[key] === val),
          value: val,
        }));
        tempList.sort( compareDesc );

        if(searchPattern.length > 0) {
          tempList = tempList.filter(c => c.value.description.includes(searchPattern));
        }

      setServices(tempList);
    }

}, [data, searchPattern, serviceToUpdate]);

return(
  <Container>
    <Search searchPattern={searchPattern} setSearchPattern={setSearchPattern} />

    <AddButton hidden={isAuthenticated} onClick={() => setShowModalCreate(true)}><Add fontSize="large" /></AddButton>
    
    <NewService onAddService={onAddService} showModal={showModalCreate} setShowModal={setShowModalCreate} />

    <UpdateService 
    service={serviceToUpdate}
    onUpdateService={onUpdateService} 
    showModal={showModalUpdate} 
    setShowModal={setShowModalUpdate} />
    
    <ListContainer>
      {services.map(i => (
        <StyledCard>
          <Date>{i.value.date}</Date>
          <Km>{i.value.km}km</Km>
          <Description>{i.value.description}</Description>
          <Icons >
            <BuildIcon onClick={() => onUpdate(i)} fontSize="large"/>
            <DeleteIcon style={{color: 'red'}} onClick={() => onDelete(i)} fontSize="large"/>
          </Icons>
        </StyledCard>
        ))}
    </ListContainer>
  </Container>
)
}

export default withFirebase(ListServices);