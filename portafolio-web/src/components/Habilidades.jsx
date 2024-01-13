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
          <img srcSet={reactIcon} className="w-[90px]" alt="" />
          <img srcSet={jsIcon} className="w-[90px]" alt="" />
          <img srcSet={angularIcon} className="w-[90px]" alt="" />
          <img srcSet={typeIcon} className="w-[90px]" alt="" />
          <img srcSet={htmlIcon} className="w-[90px]" alt="" />
          <img srcSet={cssIcon} className="w-[90px]" alt="" />
          <img srcSet={sassIcon} className="w-[90px]" alt="" />
          <img srcSet={tailwindIcon} className="w-[90px]" alt="" />
          <img srcSet={gitIcon} className="w-[90px]" alt="" />
          <img srcSet={awsIcon} className="w-[90px]" alt="" />
        </article>
      </article>
    </section>
  );
};
