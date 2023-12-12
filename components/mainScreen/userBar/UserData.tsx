import React from 'react';
import Avatar from './Avatar';

const UserData = () => {
  return (
    <div className="flex items-center justify-center">
      <Avatar />
      <h1 className="pl-4 text-xl">User Name</h1>
    </div>
  );
};

export default UserData;
