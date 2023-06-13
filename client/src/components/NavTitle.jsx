import React from 'react';

const NavTitle = (props) => {
  return (
    <div className='nav-title'>
      <h1 onClick={props.onClick}>Blog</h1>
    </div>
  );
};

export default NavTitle;
