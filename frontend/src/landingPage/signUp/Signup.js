import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import InvestmentOptions from './InvestmentOptions';

function Signup() {
    // const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });
    const { email, password, username } = inputValue;
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
            position: "bottom-right",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try { 
            const { data } = await axios.post(
                "https://zerodhaapp-tjq6.onrender.com/signup",
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    window.location.href = "https://main.d2kuzi0pspozro.amplifyapp.com";
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
            username: "",
        });
    };
    return (
        <div className="container p-5 mt-2">
            <h2 className='text-center mt-5 fs-3 mb-3'>Open a free demat and trading account online</h2>
            <p className='text-center fs-5'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            <div className='row mx-5 mt-5 pt-5'>
                <div className='col-6'>
                    <img src='media/images/account_open.svg' alt='Account_open_image'></img>
                </div>
                <div className='col-6 mt-3'>
                    <h4 className='ms-5 mb-3'>Signup now</h4>
                    <p className='ms-5'>Or track your existing application</p>
                    <form onSubmit={handleSubmit} className='ms-5 mt-3'>
                        <div className='mb-3'>
                            <label htmlFor="email">Email:&nbsp;&nbsp;</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Enter your email"
                                onChange={handleOnChange}
                                id='email'
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="username">Username:&nbsp;&nbsp;</label>
                            <input
                                id='username'
                                type="text"
                                name="username"
                                value={username}
                                placeholder="Enter your username"
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password">Password:&nbsp;&nbsp;</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Enter your password"
                                onChange={handleOnChange}
                                id='password'
                                required
                            />
                        </div>
                        <button type="submit" className='btn btn-primary'>Submit</button>
                        <p className='mt-3'>
                            Already have an account? <Link to="/login" className='btn text-decoration-none btn-outline-secondary'>Login</Link>
                        </p>
                        <hr></hr>
                        <p style={{fontSize:"13px"}}>By proceeding, you agree to the Zerodha <a href='#' className='text-decoration-none'>terms</a> & <a href='#' className='text-decoration-none'>privacy policy</a></p>

                        <p style={{fontSize:"13px"}}>Looking to open NRI account? <a href='#' className='text-decoration-none'>Click here</a></p>
                    </form>
                    <ToastContainer />
                </div>
                <InvestmentOptions />
            </div>
        </div>
    );
};

export default Signup;