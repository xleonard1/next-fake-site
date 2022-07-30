import React from 'react'

export default function Login() {

    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
  
      const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
    }
    return (
        <div className = "form-container container">
        <div className="row">
  <div className="col-md-6">
    <h2>Login</h2>

    <form  action="/api/user/id" method="post" className="form login-form">
      <div className="form-group">
        <label htmlFor="email-login">email:</label>
        <input className="form-input" type="text" id="email-login" />
      </div>
      <div className="form-group">
        <label htmlFor="password-login">password:</label>
        <input className="form-input" type="password" id="password-login" />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" type="submit">login</button>
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