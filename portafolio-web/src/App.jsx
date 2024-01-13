import "./App.css";
import { Layout } from "./layout/Layout";

import { Experiencia } from "./components/Experiencia";
import { Habilidades } from "./components/Habilidades";
import { MisProyectos } from "./components/MisProyectos";
import { SobreMi } from "./components/SobreMi";

function App() {
  return (
    <>
      <Layout>
        <>
          <SobreMi></SobreMi>
          <main>
            <h2 className="text-white text-[30px] font-bold mb-5 text-center">
              Mi experiencia
            </h2>
            <Experiencia></Experiencia>
            <Habilidades></Habilidades>

            <MisProyectos></MisProyectos>
          </main>
        </>
      </Layout>
    </>
  );
}

export default App;
