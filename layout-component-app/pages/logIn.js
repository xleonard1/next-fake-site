import React, {useEffect, useState} from 'react'
import { checkPassword, validateEmail } from '../utils/helpers';
import User from '../models/user'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    // const [data, setData] = useState(null)

    const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.id;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === 'email-login') {
        setEmail(inputValue);
      } else if (inputType === 'password-login'){
        setPassword(inputValue)
      }

      if(inputType === 'name-register') {
        setName(inputValue)
      } else if (inputType === 'email-signup') {
        setNewEmail(inputValue)
      } else if(inputType === 'password-signup'){
        setNewPassword(inputValue)
      }
    }
    const handleFormSubmit = (e) => {
      e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('invalid inputs');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `choose correct password`
      );
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setPassword('');
    setEmail('');
    setName('')
    };


    return (
        <div className = "form-container container">
        <div className="row">
  <div className="col-md-6">
    <h2>Login</h2>

    <form  action="/api/user/login" method="post" className="form login-form">
      <div className="form-group">
        <label htmlFor="email-login">email:</label>
        <input 
          className="form-input" 
          type="text" 
          id="email-login" 
          value={email}
          name="email"
          onChange={handleInputChange}
          placeholder="email"/>
      </div>
      <div className="form-group">
        <label htmlFor="password-login">password:</label>
        <input 
        className="form-input" 
         type="password" 
         id="password-login"
         value={password}
         name="password"
         onChange={handleInputChange}
         placeholder="password" />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" type="submit" onClick={handleFormSubmit}>login</button>
      </div>
    </form>
  </div>
  <div className="col-md-6 ">
    <h2 className='signup-form-title'>Signup</h2>

    <form className="form signup-form " action="/api/user/register" method='post'>
      <div className="form-group">
        <label htmlFor="name-signup">name:</label>
        <input className="form-input" type="text" id="name-signup " placeholder="name"  className="form-input" 
          type="text" 
          id="name-register" 
          value={name}
          name="name"
          onChange={handleInputChange}
          placeholder="name"/>
      </div>
      <div className="form-group">
        <label htmlFor="email-signup">email:</label>
        <input className="form-input" type="text" id="email-signup" placeholder="email"
         className="form-input" 
         type="email" 
         id="email-signup" 
         value={newEmail}
         name="newemail"
         onChange={handleInputChange}
         placeholder="email"/>
      </div>
      <div className="form-group">
        <label htmlFor="password-signup">password:</label>
        <input className="form-input" type="password" id="password-signup" placeholder="password"
        value={newPassword}
        name="newpassword"
        onChange={handleInputChange}
        placeholder="password" />

      </div>
      
      <div className="form-group">
        <button className="btn btn-primary" id = "signup-button">signup</button>
      </div>
    </form>
  </div>
</div>
</div>

    )
}



Login.getLayout = function getLayout(page) {
    return (
      <Layout>
        <Navbar />
        
        {page}
      </Layout>
    )
  }