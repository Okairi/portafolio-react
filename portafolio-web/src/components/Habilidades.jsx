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
import { dataHabilidades } from "../helpers/data";

export const Habilidades = () => {
  return (
    <section
      id="habilidades-tecnicas"
      className="flex flex-col items-center mb-[80px]"
    >
      <article>
        <h2 className="text-white text-center text-[30px] font-bold mb-[30px]">
          Mis habilidades técnicas
        </h2>

        <article className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-10 justify-items-center">
          {dataHabilidades.map((data) => {
            return <img key={data} srcSet={data} className="w-[90px]" alt="" />;
          })}
        </article>
      </article>
    </section>
  );
};
