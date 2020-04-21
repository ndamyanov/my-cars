import React, {useState} from 'react';
import { withFirebase } from '../../components/Firebase';

const NewCar = (props) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onNewCar = () => {
    console.log('add new car');
    debugger;
    props.firebase.cars().push({
      name: name,
      description: description
    });
  }
return (
  <form onSubmit={onNewCar}>
    <input type='text' placeholder='name' value={name} onChange={(val) => setName(val.target.value)} />
    <input type='text' placeholder='description' value={description} onChange={(val) => setDescription(val.target.value)} />
    <input type='submit' value='Submit' />
  </form>
)
}

export default withFirebase(NewCar);