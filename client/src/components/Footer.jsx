import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className='footer'>Copyright Ⓒ {year} Sohail Memon</footer>;
};

export default Footer;
