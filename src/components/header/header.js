import React from 'react';

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#asd">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#dsa">People</a>
        </li>
        <li>
          <a href="#ss">Planets</a>
        </li>
        <li>
          <a href="#ddd">Starships</a>
        </li>
      </ul>
      <button
        className="btn btn-primary btn-sm"
        onClick={onServiceChange}
      >Change Service</button>
    </div>
  );
};

export default Header;
