import React from 'react';
import UserBar from './userBar/UserBar';
import BodyContent from './bodyContent/BodyContent';

const MainScreen = () => {
  return (
    <div className="md:flex flex-col hidden w-4/5 bg-white h-full">
      <UserBar />
      <BodyContent />
    </div>
  );
};

export default MainScreen;
