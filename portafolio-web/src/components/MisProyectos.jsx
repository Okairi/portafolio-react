import { CardProyect } from "./CardProyect";
import { dataProyecys } from "../helpers/data";

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
        {dataProyecys.map((data) => {
          return (
            <CardProyect
              key={data.title}
              title={data.title}
              image={data.image}
              content1={data.conten1}
              contant2={data.content2}
            ></CardProyect>
          );
        })}
      </section>
    </section>
  );
};
