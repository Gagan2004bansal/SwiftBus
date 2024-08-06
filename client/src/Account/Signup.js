import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Signup = () => {

    const SIGNUP_URL = "http://localhost:3000/api/v1/signup";

    const [info, setInfo] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        role: "",
    })

    const changeHandler = (event) => {
        setInfo({ ...info, [event.target.name]: event.target.value });
    }

    const navigate = useNavigate();

    async function submitHandler(event) {
        event.preventDefault();
        try {

            const response = await axios.post(SIGNUP_URL, info);

            if (response.data.success === true) {
                toast.success("Sign up Successfully");
                setInfo({
                    username: "",
                    name: "",
                    email: "",
                    password: "",
                    role: ""
                });
                navigate('/');
            }
            else {
                toast.error("Error during signup. Please try again later.");
            }
        } catch (error) {
            console.error("Error during signup:", error);
            toast.error("Cannot Sign Up");
        }
    }

    return (
        <div className='NinetyVh homebg overflow-y-scroll py-8'>
            <div className='flex items-center justify-center md:h-full'>
                <div className='bg-white w-10/12 md:w-4/12 mx-auto rounded-md drop-shadow-md px-4 py-4 md:px-10 md:py-10 opacity-80'>
                    <div className='md:px-10'>
                        <p className='font-extrabold text-sky-700 text-4xl'>Register</p>
                        <p className='py-2 text-lg font-extralight'>Already have an account?<Link to='/api/v1/login'><span className='text-sky-600'> Login here</span></Link></p>
                    </div>
                    <div className='md:px-10'>
                        <form onSubmit={submitHandler}>
                            <div className='flex flex-col py-2'>
                                <label htmlFor="username" className='font-medium text-sky-600 text-xl'>
                                    Username
                                </label>
                                <input type='text' required placeholder='Enter Username...' id='username' className='pl-3 rounded-md border-b-2 text-black py-2' name='username' onChange={changeHandler} />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label htmlFor="name" className='font-medium text-sky-600 text-xl'>
                                    Name
                                </label>
                                <input type='text' required placeholder='Enter Fullname...' id='firstname' className='pl-3 rounded-md border-b-2 text-black py-2' name='name' onChange={changeHandler} />
                            </div>
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
                            <div className='flex gap-x-4 py-2'>
                                <input type='radio' required id='role1' className=' py-2' name='role' value="User" onChange={changeHandler} />
                                <label htmlFor="role1">User</label>
                                <input type='radio' required id='role2' className=' py-2' name='role' value="Service" onChange={changeHandler} />
                                <label htmlFor="role2">Service</label>
                            </div>
                            <div>
                                <button type='submit' className='bg-sky-500 w-full mt-4 py-2 text-white rounded-md font-bold hover:bg-sky-600' >Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
