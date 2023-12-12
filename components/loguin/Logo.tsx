import React from 'react';
import logo from '../../assets/images/logo.png';
import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Image src={logo} width={300} height={300} alt="Logo" />
    </div>
  );
};

export default Logo;
