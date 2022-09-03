import React from 'react';
import {useNavigate} from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate()
    return (
       <nav>
           <h1>CRM</h1>
           <div className='controls-container'>
               <div className='icon' onClick={() => navigate('/ticket')}>+</div>
               <div className='icon' onClick={() => navigate('/')}>-</div>
           </div>
       </nav>
    );
};

export default Nav;