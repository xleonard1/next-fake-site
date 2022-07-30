import React, {useEffect, useState} from 'react'
import { checkPassword, validateEmail } from '../utils/helpers';

if (req.method === 'POST') {
  // Check if name, email or password is provided
  const { email, password } = req.body;
  if (email && password) {
      try {
        let userData = User.findOne({email: req.body.email})
       
         if (!userData) {
           res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
           return;
         }
         const correctPw = await user.isCorrectPassword(password);

       if (!correctPassword) {
         res
           .status(400)
           .json({ message: 'Incorrect email or password, please try again' });
         return;
        }
        

      req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
    
    res.json({ user: userData, message: 'You are now logged in!' });
  });
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send('data_incomplete');
    }
} else {
  res.status(422).send('req_method_not_supported');
};


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [data, setData] = useState(null)

    const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === 'email') {
        setEmail(inputValue);
      } else {
        setPassword(inputValue);
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
    };

    // const [isLoading, setLoading] = useState(false)
  
    // useEffect(() => {
    //   setLoading(true)
    //   fetch('/api/user/id')
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setData(data)
    //       setLoading(false)
    //     })
    // }, [])

    return (
        <div className = "form-container container">
        <div className="row">
  <div className="col-md-6">
    <h2>Login</h2>

    <form  action="/api/user/id" method="post" className="form login-form">
      <div className="form-group">
        <label htmlFor="email-login">email:</label>
        <input 
          className="form-input" 
          type="text" 
          id="email-login" 
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"/>
      </div>
      <div className="form-group">
        <label htmlFor="password-login">password:</label>
        <input 
        className="form-input" 
         type="password" 
         id="password-login"
         value={password}
         name="lastName"
         onChange={handleInputChange}
         type="text"
         placeholder="password" />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" type="submit" onClick={handleFormSubmit}>login</button>
      </div>
    </form>
  </div>
  <div className="col-md-6 ">
    <h2 className='signup-form-title'>Signup</h2>

    <form className="form signup-form ">
      <div className="form-group">
        <label htmlFor="name-signup">Username:</label>
        <input className="form-input" type="text" id="name-signup" placeholder="Username"/>
      </div>
      <div className="form-group">
        <label htmlFor="name-signup">name:</label>
        <input className="form-input" type="text" id="name-signup " placeholder="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email-signup">email:</label>
        <input className="form-input" type="text" id="email-signup" placeholder="email"/>
      </div>
      <div className="form-group">
        <label htmlFor="password-signup">password:</label>
        <input className="form-input" type="password" id="password-signup" placeholder="password"/>

      </div>
      <div>
       <button id="upload_widget" className="cloudinary-button">
        Upload files
      </button>

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