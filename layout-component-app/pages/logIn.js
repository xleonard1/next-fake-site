import React from 'react'

export default function Login() {
    return (
        <div className = "form-container container">
        <div className="row">
  <div className="col-md-6">
    <h2>Login</h2>

    <form className="form login-form">
      <div className="form-group">
        <label for="email-login">email:</label>
        <input className="form-input" type="text" id="email-login" />
      </div>
      <div className="form-group">
        <label for="password-login">password:</label>
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
        <label for="name-signup">Username:</label>
        <input className="form-input" type="text" id="name-signup" placeholder="Username"/>
      </div>
      <div className="form-group">
        <label for="name-signup">name:</label>
        <input className="form-input" type="text" id="name-signup " placeholder="name" />
      </div>
      <div className="form-group">
        <label for="email-signup">email:</label>
        <input className="form-input" type="text" id="email-signup" placeholder="email"/>
      </div>
      <div className="form-group">
        <label for="password-signup">password:</label>
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