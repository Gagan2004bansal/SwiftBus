import React from 'react';
import Search from '../components/Search';

const Landing = () => {
    return (
        <div className='NinetyVh overflow-y-scroll object-contain bg-gray-200 pb-20 md:pb-20'>
            <div className='homebg h-full'>
                <div className='pt-10'>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Landing
