import "./App.css";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <>
          {" "}
          <section
            id="sobre-mi"
            className="text-white text-center flex flex-col items-center p-5 justify-center mb-[80px] mt-[40px]"
          >
            <h1 className="text-white text-[35px] text-center mt-4 mb-9 font-bold">
              Alessandro Marino
            </h1>
            <img
              srcSet="../../public/img/foto.jpg"
              alt=""
              className="w-[200px] rounded-[50%] mb-5"
            />

            <article>
              <h2 className="text-[30px] mb-2 font-bold">Sobre mí</h2>
              <p className="mb-2 leading-5 text-[#d9c8c8] text-[20px]">
                Mi nombre es Alessandro, soy una persona responsable y
                comprometida con lo que me propongo.
              </p>
              <p className="leading-5 text-[#d9c8c8] text-[20px]">
                Me gusta desarrollar soluciones informáticas ,las cuales apunten
                a objetivos.
              </p>
            </article>
          </section>
          <main>
            <h2 className="text-white text-[30px] font-bold mb-5 text-center">
              Mi experiencia
            </h2>

            <section
              id="experiencia"
              className="flex flex-col justify-start lg:flex-row lg:justify-center lg:items-center mb-[80px]"
            >
              <article className="flex p-3 text-white">
                <div className="border-l-8 border-[#004d81] rounded"></div>

                <article className="ml-4">
                  <p className="text-[20px] font-bold">
                    Dessarrollador de Sofware
                  </p>
                  <div className="flex items-center gap-4 mb-2">
                    <p className="mb-1 text-[20px]">Pragma</p>
                    <img
                      srcSet="../../public/img/pragma.jpg "
                      alt=""
                      className="w-[40px] rounded-[50%]"
                    />
                  </div>
                  <p className="mb-3 leading-[20px]">
                    - Contribuí significativamente al desarrollo de una
                    plataforma para evaluar a los candidatos para vacantes
                    disponibles.
                  </p>
                  <p className="mb-3 leading-[20px]">
                    - Implementé con éxito nuevas características en el portal
                    de un banco.
                  </p>

                  <p className="mb-3 leading-[20px]">
                    - Desempeñé un papel clave en la creación de un portal para
                    visualizar las habilidades y conocimientos de los
                    trabajadores.
                  </p>
                </article>
              </article>

              <article className="flex p-3 text-white">
                <div className="border-l-8 border-[#004d81] rounded"></div>

                <article className="ml-4">
                  <p className="text-[20px] font-bold">
                    Dessarrollador FrontEnd
                  </p>
                  <div className="flex items-center gap-4 mb-2">
                    <p className="mb-1 text-[20px]">Pragma</p>
                    <img
                      srcSet="../../public/img/fractal.jpg "
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

            <section
              id="habilidades-tecnicas"
              className="flex flex-col items-center mb-[80px]"
            >
              <article>
                <h2 className="text-white text-center text-[30px] font-bold mb-[30px]">
                  Mis habilidades técnicas
                </h2>

                <article className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-10 justify-items-center">
                  <img
                    srcSet="../../public/icons/react.svg "
                    className="w-[90px]"
                    alt=""
                  />
                  <img
                    srcSet="../../public/icons/js.svg "
                    className="w-[90px]"
                    alt=""
                  />
                  <img
                    srcSet="../../public/icons/angular.svg "
                    className="w-[90px]"
                    alt=""
                  />
                  <img
                    srcSet="../../public/icons/type.svg "
                    className="w-[90px]"
                    alt=""
                  />
                  <img
                    srcSet="../../public/icons/html.svg "
                    className="w-[90px]"
                    alt=""
                  />
                  <img
                    srcSet="../../public/icons/csss.svg "
                    className="w-[90px]"
                    alt=""
                  />
                  <img
                    srcSet="../../public/icons/sass.svg "
                    className="w-[90px]"
                    alt=""
                  />
                  <img
                    srcSet="../../public/icons/tailwind.svg "
                    className="w-[90px]"
                    alt=""
                  />
                  <img
                    srcSet="../../public/icons/git.svg "
                    className="w-[90px]"
                    alt=""
                  />
                  <img
                    srcSet="../../public/icons/aws.svg "
                    className="w-[90px]"
                    alt=""
                  />
                </article>
              </article>
            </section>

            <section
              className="mt-[10px] p-3 flex flex-col justify-center items-center"
              id="mis-proyectos"
            >
              <h2 className="text-white text-center text-[30px] font-bold mb-[30px]">
                Mis Proyectos
              </h2>
              <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
                <article
                  className="text-white w-full bg-[#004d81] p-2 rounded-[10px]
         max-w-[344px] sm:max-h-[362px] md:max-h-[362px]
         lg:max-h-[362px] xl:max-h-[362px] flex flex-col items-center cursor-pointer hover:opacity-[0.7] transition-all"
                >
                  <h3 className="text-white text-[20px] mb-3 font-medium">
                    Galery Images
                  </h3>

                  <img
                    className="w-full h-auto mb-4 max-w-[268px] max-h-[124px]"
                    srcSet="../../public/img/galery-img.png"
                    alt=""
                  />

                  <p>
                    Una aplicación web que permite agregar imágenes a una
                    galería de fotos: Se utilizó React,Sass, Html, Firebase
                  </p>
                </article>
                <article
                  className="text-white w-full bg-[#004d81] p-2 rounded-[10px] max-w-[344px] sm:max-h-[362px] md:max-h-[362px]
          lg:max-h-[362px] xl:max-h-[362px] flex flex-col items-center hover:opacity-[0.7] transition-all cursor-pointer"
                >
                  <h3 className="text-white text-[20px] mb-3 font-medium">
                    My Music App
                  </h3>

                  <img
                    className="w-full h-auto mb-4 max-w-[268px] max-h-[124px]"
                    srcSet="../../public/img/spotify.png"
                    alt=""
                  />

                  <p className="mb-3">
                    Una aplicación web que te permite iniciar sesión en Spotify
                    , buscar canciones , agregar en favoritos y reproducir las
                    músicas.
                  </p>

                  <p>Se implementó con Angular,TypeScript, Sass,Html5,</p>
                </article>
                <article
                  className="text-white w-full bg-[#004d81] p-2 rounded-[10px] max-w-[344px] sm:max-h-[362px] md:max-h-[362px]
          lg:max-h-[362px] xl:max-h-[362px] flex flex-col items-center hover:opacity-[0.7] transition-all cursor-pointer"
                >
                  <h3 className="text-white text-[20px] mb-3 font-medium">
                    App Banco
                  </h3>

                  <img
                    className="w-full h-auto mb-4 max-w-[268px] max-h-[124px]"
                    srcSet="../../public/img/banco.png"
                    alt=""
                  />

                  <p className="mb-3">
                    Una aplicación web que permite listar las entidades
                    bancarias y mostrar en detalle los balances de las cuentas.
                  </p>
                  <p>Se implementó con Angular,TypeScript, Sass,Html5, PWA</p>
                </article>

                <article
                  className="text-white w-full bg-[#004d81] p-2 rounded-[10px] max-w-[344px] sm:max-h-[362px] md:max-h-[362px]
          lg:max-h-[362px] xl:max-h-[362px]
          flex flex-col items-center hover:opacity-[0.7] transition-all cursor-pointer"
                >
                  <h3 className="text-white text-[20px] mb-3 font-medium">
                    Reproductor de música Dezzer
                  </h3>

                  <img
                    className="w-full h-auto mb-4 max-w-[268px] max-h-[124px]"
                    srcSet="../../public/img/dezzzer.png"
                    alt=""
                  />

                  <p className="mb-3">
                    Una aplicación web realizada con Vue.js donde permite
                    reproducir la música que guste.
                  </p>
                  <p>Se implementó con Vue,TypeScript, Sass,Html5</p>
                </article>
              </section>
            </section>
          </main>
        </>
      </Layout>
    </>
  );
}

export default App;
