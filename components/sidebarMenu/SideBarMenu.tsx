import React from 'react';
import Logo from '../loguin/Logo';

const SideBarMenu = () => {
  const itemStyle = 'flex p-4 bg-[#3A4245] mb-1';

  return (
    <nav className="flex flex-col w-1/5 bg-black text-white">
      <div className="flex w-full justify-center items-center p-8">
        <Logo />
      </div>
      <h3 className={itemStyle}>Inicio</h3>
      <h3 className={itemStyle}>Proyectos</h3>
      <h3 className={itemStyle}>Tablero de Licitacion</h3>
      <h3 className={itemStyle}>Catalogo de Costos</h3>
      <h3 className={itemStyle}>Equipo</h3>
    </nav>
  );
};

export default SideBarMenu;
