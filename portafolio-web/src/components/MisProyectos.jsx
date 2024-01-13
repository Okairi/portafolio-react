import galeryImage from "../assets/img/galery-img.png";
import spotifyImage from "../assets/img/spotify.png";
import bancoImage from "../assets/img/banco.png";
import dezzzerImage from "../assets/img/dezzzer.png";

export const MisProyectos = () => {
  return (
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
lg:max-h-[362px] xl:max-h-[362px] flex flex-col items-center cursor-pointer hover:opacity-[0.7] transition-all text-center"
        >
          <h3 className="text-white text-[20px] mb-3 font-medium">
            Galery Images
          </h3>

          <img
            className="w-full h-auto mb-4 max-w-[268px] max-h-[124px]"
            srcSet={galeryImage}
            alt=""
          />

          <p>
            Una aplicación web que permite agregar imágenes a una galería de
            fotos: Se utilizó React,Sass, Html, Firebase
          </p>
        </article>
        <article
          className="text-white w-full bg-[#004d81] p-2 rounded-[10px] max-w-[344px] sm:max-h-[362px] md:max-h-[362px]
lg:max-h-[362px] xl:max-h-[362px] flex flex-col items-center hover:opacity-[0.7] transition-all cursor-pointer text-center"
        >
          <h3 className="text-white text-[20px] mb-3 font-medium">
            My Music App
          </h3>

          <img
            className="w-full h-auto mb-4 max-w-[268px] max-h-[124px]"
            srcSet={spotifyImage}
            alt=""
          />

          <p className="mb-3">
            Una aplicación web que te permite iniciar sesión en Spotify , buscar
            canciones , agregar en favoritos y reproducir las músicas.
          </p>

          <p>Se implementó con Angular,TypeScript, Sass,Html5,</p>
        </article>
        <article
          className="text-white w-full bg-[#004d81] p-2 rounded-[10px] max-w-[344px] sm:max-h-[362px] md:max-h-[362px]
lg:max-h-[362px] xl:max-h-[362px] flex flex-col items-center hover:opacity-[0.7] transition-all cursor-pointer text-center"
        >
          <h3 className="text-white text-[20px] mb-3 font-medium">App Banco</h3>

          <img
            className="w-full h-auto mb-4 max-w-[268px] max-h-[124px]"
            srcSet={bancoImage}
            alt=""
          />

          <p className="mb-3">
            Una aplicación web que permite listar las entidades bancarias y
            mostrar en detalle los balances de las cuentas.
          </p>
          <p>Se implementó con Angular,TypeScript, Sass,Html5, PWA</p>
        </article>

        <article
          className="text-white w-full bg-[#004d81] p-2 rounded-[10px] max-w-[344px] sm:max-h-[362px] md:max-h-[362px]
lg:max-h-[362px] xl:max-h-[362px]
flex flex-col items-center hover:opacity-[0.7] transition-all cursor-pointer text-center"
        >
          <h3 className="text-white text-[20px] mb-3 font-medium">
            Reproductor de música Dezzer
          </h3>

          <img
            className="w-full h-auto mb-4 max-w-[268px] max-h-[124px]"
            srcSet={dezzzerImage}
            alt=""
          />

          <p className="mb-3">
            Una aplicación web realizada con Vue.js donde permite reproducir la
            música que guste.
          </p>
          <p>Se implementó con Vue,TypeScript, Sass,Html5</p>
        </article>
      </section>
    </section>
  );
};
