import React from 'react';
import UserData from './UserData';

const UserBar = () => {
  return (
    <div className="flex w-full justify-between py-4 border-b border-[#3A4245]">
      <h1 className="flex pl-4 items-end text-3xl font-bold">Inicio</h1>
      <UserData />
    </div>
  );
};

export default UserBar;
