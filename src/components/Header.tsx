import { FiSearch } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { IoPersonCircle } from "react-icons/io5";
import { headerContent } from "../content/headerContent";
import Logo from "/public/logoLastFm.png";

export const Header = () => {
  return (
    <header className="relative flex h-12 items-center gap-4 bg-black px-4 text-2xl text-white">
      <button className="lg:hidden">
        <HiMenu />
      </button>
      <a href="#" className="lg:hidden">
        <IoPersonCircle />
      </a>
      <div className="absolute left-1/2 h-full -translate-x-1/2 p-3">
        <img className="block" src={Logo} alt="Las.fm logo" />
      </div>
      <button className="ml-auto">
        <FiSearch />
      </button>
      {headerContent.map((link) => (
        <a
          className="hidden text-sm opacity-80 hover:opacity-100 lg:inline-block"
          href="#"
        >
          {link}
        </a>
      ))}
      <a href="#" className="hidden text-3xl lg:inline-block">
        <IoPersonCircle />
      </a>
    </header>
  );
};
