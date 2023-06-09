import React from 'react';
import { Link } from 'react-router-dom';
import Notes from './Notes';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/add" className="navbar-link">
            Add Flashcard
          </Link>
        </li>
      </ul>
      <Notes />
    </nav>
  );
};

export default Navbar;
