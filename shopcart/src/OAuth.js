import React, { useState } from "react";
import FacebookLogin from 'react-facebook-login';

const OAuth = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    if (response.accessToken) {
      onLogin(response);
    }
  };

  const handleLogin = () => {
    // Handle form login here if needed
    if (name && email) {
      onLogin({ name, email });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign In</h2>
      <p>Please login using one of the following:</p>
      <div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
      </div>
      <div className="mt-3">
        <FacebookLogin
          appId="763991459223890"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
          textButton="Login with Facebook"
        />
      </div>
    </div>
  );
};

export default OAuth;