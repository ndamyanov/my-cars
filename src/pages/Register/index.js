import React, {useState} from 'react';
import { withFirebase } from '../../components/Firebase';
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import {StyledForm} from './styles';


const Register = (props) => {

  // const INITIAL_STATE = {
  //   username: '',
  //   email: '',
  //   passwordOne: '',
  //   passwordTwo: '',
  //   error: null,
  // };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [passwordOne, setPasswordOne] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');
  const [error, setError] = useState('');

  const onSubmit = event => {
    console.log('register...')
     //const { username, email, passwordOne } = state;
     
    props.firebase
      .register(email, passwordOne)
      .then(authUser => {
        //debugger;
        console.log(authUser);
        //authUser.sendEmailVerification();
        //this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        setError(error);
      });

     event.preventDefault();
     props.history.push('/');
  }

  // const onChange = event => {
  //   setState({ [event.target.name]: event.target.value });
  // };

  const isInvalid =
  passwordOne !== passwordTwo ||
  passwordOne === '' ||
  email === '' ||
  username === '';

return (
  // <form>
  //   <input type='text' placeholder='username'></input>
  //   <input type='email' placeholder='email'></input>
  //   <input type='password' placeholder='password'></input>
  //   <input type='password' placeholder='confirm password'></input>
  //   <input type='submit' value='Submit' onSubmit={onLogin}/>
  // </form>
  <StyledForm onSubmit={onSubmit}>
       <FormGroup controlId="username">
          <FormLabel>Full Name</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        {/* <input
          name="username"
          value={state.username}
          onChange={onChange}
          type="text"
          placeholder="Full Name"
        /> */}
        <FormGroup controlId="email">
          <FormLabel>Email Address</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        {/* <input
          name="email"
          value={state.email}
          onChange={onChange}
          type="text"
          placeholder="Email Address"
        /> */}
         <FormGroup controlId="passwordOne">
          <FormLabel>Password</FormLabel>
          <FormControl
            autoFocus
            type="password"
            value={passwordOne}
            onChange={e => setPasswordOne(e.target.value)}
          />
        </FormGroup>
        {/* <input
          name="passwordOne"
          value={state.passwordOne}
          onChange={onChange}
          type="password"
          placeholder="Password"
        /> */}
         <FormGroup controlId="passwordTwo">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            autoFocus
            type="password"
            value={passwordTwo}
            onChange={e => setPasswordTwo(e.target.value)}
          />
        </FormGroup>
        {/* <input
          name="passwordTwo"
          value={state.passwordTwo}
          onChange={onChange}
          type="password"
          placeholder="Confirm Password"
        /> */}
        <button disabled={isInvalid} type="submit">Register</button>
        {error && <p>{error.message}</p>}
      </StyledForm>
)
}

export default withFirebase(Register);