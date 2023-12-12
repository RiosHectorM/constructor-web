import MainScreen from '@/components/mainScreen/MainScreen';
import SideBarMenu from '@/components/sidebarMenu/SideBarMenu';
import React from 'react';

const page = () => {
  return (
    <div className="flex h-screen md:flex-row flex-col w-full">
      <SideBarMenu />
      <MainScreen />
    </div>
  );
};

export default page;
