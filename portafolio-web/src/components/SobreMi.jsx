import foto from "../assets/img/foto.jpg";
import linkedin from "../assets/icons/linkedin.svg";
import logogit from "../assets/icons/logogit.svg";
export const SobreMi = () => {
  return (
    <section
      id="sobre-mi"
      className="text-white text-center flex flex-col items-center p-5 justify-center mb-[80px] mt-[40px]"
    >
      <h1 className="text-white text-[35px] text-center mt-4 mb-9 font-bold">
        Alessandro Marino
      </h1>
      <img srcSet={foto} alt="" className="w-[200px] rounded-[50%] mb-5" />

      <article className="flex  justify-around w-[200px] mb-[50px]">
        <a
          href="https://www.linkedin.com/in/alessandro-marino-retuerto-nicho-aa08b5175/"
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-[0.7] transition-all"
        >
          <img srcSet={linkedin} alt="" className="w-[60px] cursor-pointer" />
        </a>

        <a
          href="https://github.com/Okairi "
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-[0.7] transition-all"
        >
          <img srcSet={logogit} alt="" className="w-[60px] cursor-pointer" />
        </a>
      </article>
      <article>
        <h2 className="text-[30px] mb-2 font-bold">Sobre mí</h2>
        <p className="mb-2 leading-5 text-[#d9c8c8] text-[20px]">
          Mi nombre es Alessandro, soy una persona responsable y comprometida
          con lo que me propongo.
        </p>
        <p className="leading-5 text-[#d9c8c8] text-[20px]">
          Me gusta desarrollar soluciones informáticas ,las cuales apunten a
          objetivos.
        </p>
      </article>
    </section>
  );
};
