import React, { useEffect, useState } from "react";
import "./signup.css";
import motherbabybanner from "../../../assets/motherbabybanner.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { signupUser } from "../../../features/user/userSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    (state) => {
      console.log(state.user);
      return state.user;
    }
  );
  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(signupUser(user));
  };
  // useEffect(() => {
  //   return () => {
  //     dispatch(clearState());
  //   };
  // }, []);

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      // dispatch(clearState());
      // history.push('/');
    }
    if (isError) {
      toast.error(errorMessage);
      // dispatch(clearState());
    }
  }, [isSuccess, isError]);

  return (
    <div className="signup flex jcc aic">
      <div className="signup-container">
        <div className="signup-banner">
          <img
            className="responsive"
            src={motherbabybanner}
            alt="baby and mother banner"
          />
        </div>
        <div className="signup-form flex jcc aic">
          <form onSubmit={handleSubmit}>
            <h1 className="h1 t-center">Signup</h1>
            <div className="form-container">
              <div className="flex flex-col">
                <div className="input-container flex flex-col mt05-rem">
                  <input
                    className="input input-green input-md input-bg-grey mt03-rem"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={user.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col mt05-rem">
                  <input
                    className="input input-green input-bg-grey mt03-rem"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={user.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col mt05-rem">
                  <input
                    className="input  input-green  input-bg-grey mt03-rem"
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
                    className="input input-green input-bg-grey mt03-rem"
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
                  <button
                    onClick={() => handleSubmit}
                    type="submit"
                    className="btn btn-lg btn-green mt1-rem"
                  >
                    Create new account
                  </button>
                  <small className="mt05-rem">
                    Already having an account?{" "}
                    <NavLink to="/signin" className="bold links">
                      Login
                    </NavLink>
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

export default Signup;
