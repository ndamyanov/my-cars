import React, {useState} from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
// import ControlLabel from "react-bootstrap/ControlLabel";
import {StyledLogin, StyledForm} from './styles';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }


return (
  // <form>
  //   <input type='text' placeholder='username'></input>
  //   <input type='password' placeholder='password'></input>
  //   <input type='submit' value='Submit' onSubmit={onLogin}/>
  // </form>


<StyledLogin>
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </StyledForm>
    </StyledLogin>
  );
}

export default Login;