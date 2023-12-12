import React from 'react';
import UserData from './UserData';
import { UserMenuProps } from '@/app/types/types';

const UserBar: React.FC<UserMenuProps> = ({ currentUser }) => {
  return (
    <div className="flex w-full justify-between py-4 border-b border-[#3A4245]">
      <h1 className="flex pl-4 items-end text-3xl font-bold">
        {currentUser?.page}
      </h1>
      <UserData />
    </div>
  );
};

export default UserBar;
