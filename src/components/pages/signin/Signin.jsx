import React, { useState } from "react";
import "./signin.css";
import motherbabybanner from "../../../assets/motherbabybanner.svg";
import { NavLink} from 'react-router-dom'

const Signin = () => {
  const [user, setUser] = useState({

    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
  }
  return (
    <div className="signin flex jcc aic">
      <div className="signin-container">
        <div className="signin-banner">
          <img
            className="responsive"
            src={motherbabybanner}
            alt="baby and mother banner"
          />
        </div>
        <div className="signin-form flex jcc aic">
          <form onSubmit={handleSubmit}>
            <h1 className="h1 t-center">Signin</h1>
            <div className="form-container">
              <div className="flex flex-col">
                                <div className="flex flex-col mt05-rem">
                  <input
                    className="input input-bg-grey mt03-rem"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col mt05-rem">
                  <input
                    className="input input-bg-grey mt03-rem"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col jcc aic">
                  {" "}
                  <button type="submit" className="btn btn-lg btn-green mt1-rem">
                    Login
                  </button>
                  <small className="mt05-rem">
                    Don't have an account? <NavLink to='/signup' className="bold links">Create account</NavLink>
                  </small>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
