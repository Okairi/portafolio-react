import pragmaLogo from "../assets/img/pragma.jpg";
import fractalLogo from "../assets/img/fractal.jpg";
export const Experiencia = () => {
  return (
    <section
      id="experiencia"
      className="flex flex-col justify-start lg:flex-row lg:justify-center lg:items-center mb-[80px]"
    >
      <article className="flex p-3 text-white">
        <div className="border-l-8 border-[#004d81] rounded"></div>

        <article className="ml-4">
          <p className="text-[20px] font-bold">Dessarrollador de Sofware</p>
          <div className="flex items-center gap-4 mb-2">
            <p className="mb-1 text-[20px]">Pragma</p>
            <img
              srcSet={pragmaLogo}
              alt=""
              className="w-[40px] rounded-[50%]"
            />
          </div>
          <p className="mb-3 leading-[20px]">
            - Contribuí significativamente al desarrollo de una plataforma para
            evaluar a los candidatos para vacantes disponibles.
          </p>
          <p className="mb-3 leading-[20px]">
            - Implementé con éxito nuevas características en el portal de un
            banco.
          </p>

          <p className="mb-3 leading-[20px]">
            - Desempeñé un papel clave en la creación de un portal para
            visualizar las habilidades y conocimientos de los trabajadores.
          </p>
        </article>
      </article>

      <article className="flex p-3 text-white">
        <div className="border-l-8 border-[#004d81] rounded"></div>

        <article className="ml-4">
          <p className="text-[20px] font-bold">Dessarrollador FrontEnd</p>
          <div className="flex items-center gap-4 mb-2">
            <p className="mb-1 text-[20px]">Pragma</p>
            <img
              srcSet={fractalLogo}
              alt=""
              className="w-[40px] rounded-[50%]"
            />
          </div>
          <p className="mb-3 leading-[20px]">
            - Desarrollo e Implementación de mejoras en el portal web.
          </p>
          <p className="mb-3 leading-[20px]">
            - Creación de componentes para monorepos.
          </p>

          <p className="mb-3 leading-[20px]">
            - Experiencia coordinando equipos multidisciplinarios
          </p>
        </article>
      </article>
    </section>
  );
};
