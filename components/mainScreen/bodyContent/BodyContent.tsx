import React from 'react';
import ProjectIcon from './ProjectIcon';
import ProjectData from './ProjectData';
import ConfigUser from './ConfigUser';

const BodyContent = () => {
  return (
    <div className="flex w-full justify-center items-center flex-col bg-[#F4F5F6]">
      <div className="flex flex-col w-4/6">
        <h1 className="text-3xl pt-8 font-bold">Proyecto Reciente</h1>
        <div className="flex bg-white p-4 items-center border border-[#EBECED] shadow-sm shadow-[#DCDEDF]transition-shadow hover:shadow-md hover:shadow-black my-10">
          <ProjectIcon />
          <ProjectData />
        </div>
      </div>
      <div className="flex flex-col w-4/6">
        <h1 className="text-3xl 8py-8 font-bold">Panel de Configuracion</h1>
        <div className="flex bg-white p-4 items-center border border-[#EBECED] shadow-sm shadow-[#DCDEDF]transition-shadow hover:shadow-md hover:shadow-black my-10">
          <ConfigUser />
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
