import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='NinetyVh homebg overflow-y-scroll py-8'>
            <div className='flex items-center justify-center md:h-full'>
                <div className='bg-white w-10/12 md:w-4/12 mx-auto rounded-md drop-shadow-md px-4 py-4 md:px-10 md:py-10'>
                    <div className='md:px-10'>
                        <p className='font-extrabold text-sky-700 text-4xl'>Register</p>
                        <p className='py-2 text-lg font-extralight'>Already have an account?<Link to='/login'><span className='text-sky-600'> Login here</span></Link></p>
                    </div>
                    <div className='md:px-10'>
                        <form >
                            <div className='flex flex-col py-2'>
                                <label htmlFor="username" className='font-medium text-sky-600 text-xl'>
                                    Username
                                </label>
                                <input type='text' required placeholder='Enter Username...' id='username' className='pl-3 rounded-md border-b-2 text-black py-2' name='username' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label htmlFor="name" className='font-medium text-sky-600 text-xl'>
                                    Name
                                </label>
                                <input type='text' required placeholder='Enter Fullname...' id='firstname' className='pl-3 rounded-md border-b-2 text-black py-2' name='name' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label htmlFor="email" className='font-medium text-sky-600 text-xl'>
                                    Email
                                </label>
                                <input type='email' required placeholder='Enter Email...' id='email' className='pl-3 rounded-md border-b-2 text-black py-2' name='email' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label htmlFor="password" className='font-medium text-sky-600 text-xl'>
                                    Password
                                </label>
                                <input type='password' required placeholder='Enter Password...' id='password' className='pl-3 rounded-md border-b-2 text-black py-2' name='password' />
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