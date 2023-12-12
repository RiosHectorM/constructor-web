import ProjectsScreen from '@/components/projectScreen/ProjectsScreen';
import SideBarMenu from '@/components/sidebarMenu/SideBarMenu';
import React from 'react';

const page = () => {
  return (
    <div className="flex h-screen md:flex-row flex-col w-full">
      <SideBarMenu />
      <ProjectsScreen />
    </div>
  );
};

export default page;
