import React from 'react';
import UserBar from '../shared/userBar/UserBar';
import BodyProjectContent from './projectContent/BodyProjectContent';
import { UserMenuProps } from '@/app/types/types';

const ProjectsScreen = () => {
  const currentUser: UserMenuProps['currentUser'] = {
    name: 'Nombre Estático',
    email: 'correo@ejemplo.com',
    image: 'url_de_la_imagen',
    page: 'Projects',
  };

  return (
    <div className="md:flex flex-col hidden w-4/5 bg-white h-full">
      <UserBar currentUser={currentUser} />
      <BodyProjectContent />
    </div>
  );
};

export default ProjectsScreen;
