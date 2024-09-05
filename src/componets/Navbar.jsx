import React, { useState } from 'react';
import abc from '../assets/images/png/orange.jpg';

const Navbar = () => {
const [open, setOpen] = useState(false)
    return (
        <div className='max-w-[1140px] h-16 px-4 py-6 mx-auto'>
            <div className="flex justify-between items-center">
                <h1 className='text-white text-3xl'>FinnaceX </h1>
            <div className=' capitalize h-[19px] w-[433px] text-white  flex items-center justify-between'>
                <a href="#">why finnace X</a>
                <a href="#">features</a>
                <a href="#">updates</a>
                <a href="#">blog</a>
            </div>
             <div className=''>
                    <p onClick={()=>setOpen(true)} className="text-white">sign up </p>
                </div>
            </div>
            <div className={`fixed duration-300 top-0 w-full h-full bg-black flex flex-col gap-4 items-center justify-center
                ${open === true ?"left-0":"-left-full"}
                `}>
            <p onClick={()=>setOpen(false)} className='text-white text-3xl absolute top-4 end-4'>closed</p>
            </div>            
        </div>
    );
}

export default Navbar;
