import React from 'react';
import NavItem from './NavItem';
import NavTitle from './NavTitle';

const Navbar = () => {
  const navItems = ['Home', 'Post', 'About', 'Contact'];

  return (
    <div className='navbar'>
      <NavTitle />
      <div className='nav-items'>
        {navItems.map((navItem, index) => (
          <NavItem itemName={navItem} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
