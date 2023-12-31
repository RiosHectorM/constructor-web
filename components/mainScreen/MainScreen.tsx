import React from 'react';
import UserBar from '../shared/userBar/UserBar';
import BodyContent from './bodyContent/BodyContent';
import { UserMenuProps } from '@/app/types/types';

const MainScreen = () => {
  const currentUser: UserMenuProps['currentUser'] = {
    name: 'Nombre Estático',
    email: 'correo@ejemplo.com',
    image: 'url_de_la_imagen',
    page: 'Inicio',
  };
  
  return (
    <div className="md:flex flex-col hidden w-4/5 bg-white h-full">
      <UserBar currentUser={currentUser} />
      <BodyContent />
    </div>
  );
};

export default MainScreen;
