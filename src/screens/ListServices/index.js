import React, {useEffect, useState} from 'react';
import ItemOverview from '../../components/ItemOverview';
import {Container, AddButton, StyledCard} from './styles';
import Search from '../../components/SearchField';
import { withFirebase } from '../../components/Firebase';           

import NewService from '../../components/Forms/NewService';
import { Add } from '@material-ui/icons';

const ListServices = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [services, setServices] = useState([]);
  // const [searchText, setSearchText] = useState([]);

  let {data, searchPattern, setSearchPattern, onAddService} = props;
  let isAuthenticated = props.firebase.auth.currentUser === null;
  //let listItems = props.data;

useEffect(() => {
  let tempList;
    debugger;
      if(data){
        tempList = Object.values(data).map(val => ({
          ...data[val],
          key:  Object.keys(data).find(key => data[key] === val),
          value: val,
        }));

        if(searchPattern.length > 0) {
          tempList = tempList.filter(c => c.value.description.includes(searchPattern));
        }

      setServices(tempList);
    }

}, [data, searchPattern]);

return(
  <Container>
    <Search searchPattern={searchPattern} setSearchPattern={setSearchPattern} />

    <AddButton hidden={isAuthenticated} onClick={() => setShowModal(true)}><Add fontSize="large" /></AddButton>
    
    <NewService onAddService={onAddService} showModal={showModal} setShowModal={setShowModal} />
    
  {/* {list()} */}
  {services.map(i => (<StyledCard>{i.value.date} => {i.value.description}</StyledCard>))}
  </Container>
)
}

export default withFirebase(ListServices);