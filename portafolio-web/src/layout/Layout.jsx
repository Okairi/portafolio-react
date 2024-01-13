import { IconClose } from "../components/IconClose";
import { NavBar } from "../components/NavBar";

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-[#001f3f]  w-[100vw]  m-auto font-jost px-[15px] pb-[20px] transition-all	">
        <header className="flex justify-between p-4 flex-row-reverse">
          <nav className="flex justify-between p-4 text-white font-jost text-lg hidden md:flex gap-[35px] fixed top-0 right-0 bg-[#081829] w-full  z-50">
            <div></div>

            <NavBar />
          </nav>

          <div className="fixed">
            <IconClose />
          </div>
        </header>

        {children}
      </div>
    </>
  );
};
