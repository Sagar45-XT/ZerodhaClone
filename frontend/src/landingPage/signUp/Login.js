import styles from "./Login.module.css";
import React, { useState } from "react";
import { Link, } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  // const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          // window.location.replace = "http://localhost:3002/";
          window.location.replace("http://localhost:3002/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="container p-5 my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <h2 className="mb-5 text-center">Login Account</h2>
        <form onSubmit={handleSubmit} className={styles.login_form}>
          <div className="d-flex flex-column mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>
          <div className="login-div d-flex flex-column mb-3 justify-content-center">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <span>
            &nbsp;&nbsp;Already have an account? <Link to={"/signup"} className="text-decoration-none">Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
    </div>
  );
};

export default Login;