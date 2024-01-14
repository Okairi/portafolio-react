import galeryImage from "../assets/img/galery-img.png";
import spotifyImage from "../assets/img/spotify.png";
import bancoImage from "../assets/img/banco.png";
import dezzzerImage from "../assets/img/dezzzer.png";

import reactIcon from "../assets/icons/react.svg";
import jsIcon from "../assets/icons/js.svg";
import angularIcon from "../assets/icons/angular.svg";
import typeIcon from "../assets/icons/type.svg";
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/csss.svg";
import sassIcon from "../assets/icons/sass.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import gitIcon from "../assets/icons/git.svg";
import awsIcon from "../assets/icons/aws.svg";

export const dataProyecys = [
  {
    title: "Galery Images",
    image: galeryImage,
    conten1: `Una aplicación web que permite agregar imágenes a una galería de
    fotos: Se utilizó React,Sass, Html, Firebase`,
    content2: "",
    redirect:
      "https://658b81a82473eb05a287eb49--thunderous-kringle-55a5cf.netlify.app/#/login",
  },
  {
    title: " My Music App",
    image: spotifyImage,
    conten1: `Una aplicación web que te permite iniciar sesión en Spotify , buscar
    canciones , agregar en favoritos y reproducir las músicas.`,
    content2: "Se implementó con Angular,TypeScript, Sass,Html5.",
    redirect: "https://spotify-clone-2022.netlify.app/login",
  },
  {
    title: "App Banco",
    image: bancoImage,
    conten1: `Una aplicación web que permite listar las entidades bancarias y
    mostrar en detalle los balances de las cuentas.`,
    content2: "Se implementó con Angular,TypeScript, Sass,Html5, PWA.",
    redirect:
      "https://654b11a171cce66be4f6be05--peaceful-dango-f0fb7b.netlify.app/auth/login",
  },
  {
    title: "Reproductor de música Dezzer",
    image: dezzzerImage,
    conten1: `Una aplicación web realizada con Vue.js donde permite reproducir la
    música que guste.`,
    content2: "Se implementó con Vue,TypeScript, Sass,Html5",
    redirect: "https://reto-dezzer-vue.netlify.app/",
  },
];

export const dataHabilidades = [
  reactIcon,
  jsIcon,
  angularIcon,
  typeIcon,
  htmlIcon,
  cssIcon,
  sassIcon,
  tailwindIcon,
  gitIcon,
  awsIcon,
];
