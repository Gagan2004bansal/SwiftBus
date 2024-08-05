import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from 'axios';
import { LOGIN_URL } from '../apis/Api';

const Login = () => {

    const [info, setInfo] = useState({
        email: "",
        password: ""
    });

    const changeHandler = (event) => {
        setInfo({ ...info, [event.target.name]: event.target.value });
    }

    const navigate = useNavigate();

    async function submitHandler(event) {
        event.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL, info);

            if (response.data.success === true) {
                toast.success("Login Successfully");
                setInfo({
                    email: "",
                    password: ""
                });
                navigate('/');
            }
            else {
                toast.error("Error during login. Please try again later.");
            }

        } catch (error) {
            console.error("Error during login:", error);
            toast.error("Email or password doesn't match");
        }
    }

    return (
        <div className='NinetyVh homebg overflow-y-scroll py-8'>
            <div className='flex items-center justify-center md:h-full'>
                <div className='bg-white w-10/12 md:w-4/12 mx-auto rounded-md drop-shadow-md px-4 py-4 md:px-10 md:py-10 opacity-80'>
                    <div className='md:px-10'>
                        <p className='font-extrabold text-sky-700 text-4xl'>Login</p>
                        <p className='py-2 text-lg font-extralight'>Don't have an Account?<Link to='/signup'><span className='text-sky-600'> Create your account</span></Link>, it takes less than a minute</p>
                    </div>
                    <div className='md:px-10'>
                        <form onSubmit={submitHandler} >
                            <div className='flex flex-col py-2'>
                                <label htmlFor="email" className='font-medium text-sky-600 text-xl'>
                                    Email
                                </label>
                                <input type='email' required placeholder='Enter Email...' id='email' className='pl-3 rounded-md border-b-2 text-black py-2' name='email' onChange={changeHandler} />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label htmlFor="password" className='font-medium text-sky-600 text-xl'>
                                    Password
                                </label>
                                <input type='password' required placeholder='Enter Password...' id='password' className='pl-3 rounded-md border-b-2 text-black py-2' name='password' onChange={changeHandler} />
                            </div>
                            <div>
                                <button type='submit' className='bg-sky-500 w-full mt-4 py-2 text-white rounded-md font-bold hover:bg-sky-600' >Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
