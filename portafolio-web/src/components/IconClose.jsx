import { useState } from "react";

export const IconClose = () => {
  const [icon, setIcon] = useState(true);

  const changeIcon = () => {
    setIcon(!icon);
  };

  const closeMenu = () => {
    setIcon(true);
  };

  return (
    <>
      {icon ? (
        <img
          src="../../public/icons/burgericon.svg"
          alt=""
          className="size-[50px] md:hidden"
          onClick={changeIcon}
        />
      ) : (
        <img
          src="../../public/icons/closeicon.svg"
          alt=""
          className="size-[50px] md:hidden"
          onClick={changeIcon}
        />
      )}
      {!icon && (
        <div className="flex flex-col gap-[25px] bg-[#007acc] text-white p-2 absolute right-[-10px] w-[160px] text-center rounded-[10px] mt-[20px]">
          <a
            href="#sobre-mi"
            className="text-[20px] font-bold scroll-smooth hover:text-[#001f3f]"
            onClick={closeMenu}
          >
            Sobre mi
          </a>
          <a
            href="#experiencia"
            className="text-[20px] font-bold scroll-smooth hover:text-[#001f3f]"
            onClick={closeMenu}
          >
            Mi experiencia
          </a>
          <a
            href="#habilidades-tecnicas"
            className="text-[20px] font-bold scroll-smooth hover:text-[#001f3f]"
            onClick={closeMenu}
          >
            Habilidades Técnicas
          </a>
          <a
            href="#mis-proyectos"
            className="text-[20px] font-bold scroll-smooth hover:text-[#001f3f]"
            onClick={closeMenu}
          >
            Proyectos
          </a>
        </div>
      )}
    </>
  );
};
