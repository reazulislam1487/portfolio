import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="fixed top-2 left-1/2 z-20 w-full max-w-[1300px] -translate-x-1/2 px-4">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto  p-4 rounded-full border border-orange border-opacity-70 shadow-lg">
        <NavbarLogo />

        {/* Responsive Links */}
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <NavbarBtn />
      </div>

      {/* Mobile toggler container */}
      <div className="flex lg:hidden sm:flex justify-center items-center p-4 mt-3 rounded-full border border-orange border-opacity-70 shadow-md">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
