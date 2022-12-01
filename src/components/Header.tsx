import { FiSearch } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { IoPersonCircle } from "react-icons/io5";
import Logo from "/public/logoLastFm.png";

export const Header = () => {
  return (
    <header className="relative flex h-12 items-center gap-4 bg-black px-4 text-2xl text-white">
      <button className="lg:hidden">
        <HiMenu />
      </button>
      <button className="lg:hidden">
        <IoPersonCircle />
      </button>
      <div className="absolute left-1/2 h-full -translate-x-1/2 p-3">
        <img className="block" src={Logo} alt="Las.fm logo" />
      </div>
      <button className="ml-auto">
        <FiSearch />
      </button>
    </header>
  );
};
