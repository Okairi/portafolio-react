export const NavBar = () => {
  return (
    <article className="flex gap-[45px]">
      <a
        href="#sobre-mi"
        className="text-[#007acc] text-[20px] font-bold hover:text-white"
      >
        Sobre mi
      </a>
      <a
        href="#experiencia"
        className="text-[#007acc] text-[20px] font-bold hover:text-white"
      >
        Mi experiencia
      </a>
      <a
        href="#habilidades-tecnicas"
        className="text-[#007acc] text-[20px] font-bold hover:text-white"
      >
        Habilidades Técnicas
      </a>
      <a
        href="#mis-proyectos"
        className="text-[#007acc] text-[20px] font-bold hover:text-white"
      >
        Proyectos
      </a>
    </article>
  );
};
