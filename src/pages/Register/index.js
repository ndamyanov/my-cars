import React from 'react';

const Register = () => {

  const onLogin = () => {
    console.log('register');
  }
return (
  <form>
    <input type='text' placeholder='username'></input>
    <input type='email' placeholder='email'></input>
    <input type='password' placeholder='password'></input>
    <input type='password' placeholder='confirm password'></input>
    <input type='submit' value='Submit' onSubmit={onLogin}/>
  </form>
)
}

export default Register;