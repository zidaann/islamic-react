import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';
export default function Navigation() {
   return (
      <nav className='navbar navbar-expand-lg px-5 fixed-top bg-white '>
         <NavLink className='navbar-brand px-3 rounded ' to={'/'}>
            ISLAMIC.ID
         </NavLink>
         <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
         >
            <span className='navbar-toggler-icon' />
         </button>
         <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav ms-auto '>
               <NavLink
                  className='nav-link active'
                  aria-current='page'
                  to={'/'}
               >
                  Home
               </NavLink>
               <NavLink className='nav-link' href='#'>
                  About
               </NavLink>
            </div>
         </div>
      </nav>
   );
}
