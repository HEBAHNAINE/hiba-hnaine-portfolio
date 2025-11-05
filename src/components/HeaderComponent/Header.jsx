import Logo from "./Subheadercomponent/Logo";
import Navbar from "./Subheadercomponent/Navbar";

const Header = () => {
  return (
    <div className="w-full bg-[#1f1f3f]/30 backdrop-blur-[5px] z-40 shadow-lg fixed top-0 py-4 md:py-0 ">
      <header className="container mx-auto flex items-center justify-between px-6">
        <Logo />
       
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
