import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-primary bg-primary'>
      <div className='navbar-brand'>ShowsAndMoves</div>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarColor03'
        aria-controls='navbarColor03'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarColor03'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>
              Søg serier <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/favorite'>
              Mine favoritter
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
