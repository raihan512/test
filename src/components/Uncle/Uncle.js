import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = ({ house }) => {
    return (
        <div className='bg-green-500 p-8 rounded-md my-5'>
            <h3 className='font-bold text-2xl mb-3'>Uncle</h3>
            <h5 className='text-5xl mb-3'>House: {house}</h5>
            <section className='grid grid-cols-2 gap-2'>
                <Cousin house={house}></Cousin>
                <Cousin house={house}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;