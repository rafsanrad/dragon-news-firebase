import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
            <img className='w-100' src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            {/* genetering current date,month,year(use from date-fns and install from date-fns-npm) */}
            <p className='text-semibold text-accent'>{format(new Date(),"EEEE , MMMM MM , yyyy")}</p>
        </div>
    );
};

export default Header;