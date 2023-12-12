import Projects from '@/components/projectScreen/Projects';
import SideBarMenu from '@/components/sidebarMenu/SideBarMenu';
import React from 'react';

const page = () => {
  return (
    <div className="flex h-screen md:flex-row flex-col w-full">
      <SideBarMenu />
      <Projects />
    </div>
  );
};

export default page;
