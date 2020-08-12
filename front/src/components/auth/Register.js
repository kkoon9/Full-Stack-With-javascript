import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: ""
  });

  const { name, email, password, confirm_password } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirm_password) {
      console.log('Password do not match');
    } else {
      console.log("Success");
      // const newUser = {
      //   name,
      //   email,
      //   password
      // };
      // try {
      //   const config = {
      //     headers: {
      //       'Content-Type': 'application/json'
      //     }
      //   };
      //   const body = JSON.stringify(newUser);

      //   const res = await axios.post('api/users', body, config);
      //   console.log(res.data);
      // } catch (error) {
      //   console.error(error.response.data);
      // }
    }
  }

  return (
    <Fragment>
      <h1 className="large text-primary">
        Sign Up
      </h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
          <small className="form-text">
            This site uses Gravatar, so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" minlength="6" name="password" value={password} onChange={e => onChange(e)} required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Confirm Password" minlength="6" name="confirm_password" value={confirm_password} onChange={e => onChange(e)} required />
        </div>
        <input type="submit" value="Register" className="btn btn-primary" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

export default Register;