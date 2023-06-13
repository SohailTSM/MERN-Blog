import React from 'react';
import NavItem from './NavItem';
import NavTitle from './NavTitle';

const Navbar = (props) => {
  const navItems = ['Home', 'Post', 'About', 'Contact'];

  return (
    <div className='navbar'>
      <NavTitle onClick={props.onClick}/>
      <div className='nav-items'>
        {navItems.map((navItem, index) => (
          <NavItem itemName={navItem} key={index} onClick={props.onClick}/>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
