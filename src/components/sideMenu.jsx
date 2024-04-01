import React, { useState } from 'react';
import './sideMenu.css'; // Import the stylesheet for styling
import NavListItem from './NavListItem';
import navlistData from '../data/navlistData';

function SideMenu({ active, sectionActive }) {
  const [navData, setNavData] = useState(navlistData);

  const handleNavOnClick = (id, target) => {
    console.log(id);
    const newNavData = navData.map(nav=> {
      nav.active = false; 
      if (nav._id === id) nav.active = true; 
      return nav;
    });
    setNavData(newNavData); 
    sectionActive(target); 
  };
  
  

  return (
    <div className={`sideMenu ${active ? 'active' : ''}`}>
      <a href='# ' className='logo'>
        <i className='bi bi-controller'></i>
        <span className='brand'> play</span>
      </a>
      <ul className='nav'>
        {navData.map((item) => (
          <NavListItem 
          key={item._id}
           item={item}
            navOnClick={handleNavOnClick}
             />
        ))}
      </ul>
      <ul className='social'>
        <li>
          <a href='https://example.com'>
            <i className='bi bi-meta'></i>
          </a>
        </li>
        <li>
          <a href='https://example.com'>
            <i className='bi bi-twitter-x'></i>
          </a>
        </li>
        <li>
          <a href='https://example.com'>
            <i className='bi bi-youtube'></i>
          </a>
        </li>
        <li>
          <a href='https://example.com' className='share'>
            <i className='bi bi-share-fill'></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
