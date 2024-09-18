import BurgerMenu from "./burger";
import UserNav from "./user-nav";

const NavBar = () => {
  return (
    <div className="absolute bg-white w-full top-0 border-b z-10 h-16 flex items-center justify-between px-7">
      <div className="z-30 md:hidden">
        <BurgerMenu />
      </div>
      <div className="flex items-center gap-4 absolute right-7">
        <UserNav />
      </div>
    </div>
  );
};

export default NavBar;
