import React from 'react';

const ConfigUser = () => {
  return (
    <div className="flex flex-col justify-items-center pl-4">
      <h1 className="text-lg font-bold">Configuracion 1</h1>
      <div className="main flex border rounded-full overflow-hidden m-4 select-none">
        <div className="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">
          Perfil
        </div>
        <label className="flex radio p-2 cursor-pointer">
          <input
            className="my-auto transform scale-125"
            type="radio"
            name="sfg"
          />
          <div className="title px-2">Admin</div>
        </label>

        <label className="flex radio p-2 cursor-pointer">
          <input
            className="my-auto transform scale-125"
            type="radio"
            name="sfg"
          />
          <div className="title px-2">Invitado</div>
        </label>

        <label className="flex radio p-2 cursor-pointer">
          <input
            className="my-auto transform scale-125"
            type="radio"
            name="sfg"
          />
          <div className="title px-2">Perfil 1</div>
        </label>

        <label className="flex radio p-2 cursor-pointer">
          <input
            className="my-auto transform scale-125"
            type="radio"
            name="sfg"
          />
          <div className="title px-2">Perfil 2</div>
        </label>
      </div>
      <h1 className="text-lg font-bold">Configuracion 2</h1>
      <div>
        <label className="flex radio p-2 cursor-pointer font-bold text-md">
          <input
            className="my-auto transform scale-125"
            type="checkbox"
            name="chk1"
          />
          <div className="title px-2 my-auto">Public</div>
        </label>
        <label className="flex radio p-2 cursor-pointer font-bold text-md">
          <input
            className="my-auto transform scale-125"
            type="checkbox"
            name="chk1"
          />
          <div className="title px-2 my-auto">Private</div>
        </label>
        <label className="flex radio p-2 cursor-pointer font-bold text-md">
          <input
            className="my-auto transform scale-125"
            type="checkbox"
            name="chk1"
          />
          <div className="title px-2 my-auto">Indeterminado</div>
        </label>
      </div>
    </div>
  );
};

export default ConfigUser;
