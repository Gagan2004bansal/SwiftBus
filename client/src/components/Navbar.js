import React from 'react';
import { TbBus } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='TenVh bg-sky-900 text-xl flex items-center justify-between px-4 md:px-8 drop-shadow-xl'>
                <Link to='/'>
                    <div className='flex items-center justify-center gap-x-2'>
                        <div className='text-xl md:text-3xl text-sky-300'><TbBus /></div>
                        <div className='font-bold text-2xl md:text-3xl text-sky-300'> SwiftBus </div>
                    </div>
                </Link>
                <div className='flex items-center justify-center gap-x-4'>
                    <Link to='api/v1/login'>
                        <div className='bg-sky-800 px-4 md:px-8 py-2 rounded-lg text-sky-300 drop-shadow-lg hover:border-[1px] hover:border-sky-300'>
                            Login
                        </div>
                    </Link>
                    <Link to='api/v1/signup'>
                        <div className='bg-sky-800 px-4 md:px-8 py-2 rounded-lg text-sky-300 drop-shadow-lg hover:border-[1px] hover:border-sky-300'>
                            Sign Up
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
