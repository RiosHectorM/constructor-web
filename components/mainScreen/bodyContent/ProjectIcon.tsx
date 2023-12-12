import React from 'react';
import logo from '../../../assets/images/projectIcon.png';
import Image from 'next/image';

const ProjectIcon = () => {
  return (
    <div>
      <Image src={logo} width={100} height={100} alt="Project Icon" />
    </div>
  );
};

export default ProjectIcon;
