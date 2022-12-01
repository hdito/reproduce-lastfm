import { FiSearch } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { IoPersonCircle } from "react-icons/io5";
import Logo from "/public/logoLastFm.png";

export const Header = () => {
  return (
    <header className="px-4 relative flex gap-4 h-12 bg-black text-white items-center text-2xl">
      <button>
        <HiMenu />
      </button>
      <button>
        <IoPersonCircle />
      </button>
      <div className="p-3 absolute h-full  left-1/2 -translate-x-1/2">
        <img className="block" src={Logo} alt="Las.fm logo" />
      </div>
      <button className="ml-auto">
        <FiSearch />
      </button>
    </header>
  );
};
