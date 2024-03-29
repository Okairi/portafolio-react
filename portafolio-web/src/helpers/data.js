import galeryImage from "../assets/img/galery-img.jpg";
import spotifyImage from "../assets/img/spotify.jpg";
import quizz from "../assets/img/quizz.jpg";
import dezzzerImage from "../assets/img/dezzzer.jpg";

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
    fotos.`,
    redirect:
      "https://658b81a82473eb05a287eb49--thunderous-kringle-55a5cf.netlify.app/#/login",
  },
  {
    title: " My Music App",
    image: spotifyImage,
    conten1: `Una aplicación web que te permite iniciar sesión en Spotify , buscar
    canciones , agregar en favoritos y reproducir las músicas.`,
    redirect: "https://spotify-clone-2022.netlify.app/login",
  },
  {
    title: "Cuestionario",
    image: quizz,
    conten1: `Se realizó una aplicación web donde se puede crear diferentes cuestionarios donde se puede personalizar las preguntas. `,
    redirect: "https://cuestionario-de-los-dioses.netlify.app/",
  },
  {
    title: "Reproductor de música Dezzer",
    image: dezzzerImage,
    conten1: `Una aplicación web realizada con Vue.js donde permite reproducir la
    música que guste.`,
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
