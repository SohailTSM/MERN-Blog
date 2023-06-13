import React from 'react';

const NavItem = (props) => {
  return <div onClick={props.onClick}>{props.itemName}</div>;
};

export default NavItem;
