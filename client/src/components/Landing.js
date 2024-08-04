import React from 'react';
import Search from '../components/Search';

const Landing = () => {
    return (
        <div className='NinetyVh overflow-y-scroll object-contain'>
            <div className='homebg h-full'>
                <div className='pt-10'>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Landing
