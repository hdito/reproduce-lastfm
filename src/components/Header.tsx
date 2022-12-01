import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { IoClose, IoPersonCircle } from "react-icons/io5";
import { headerContent } from "../content/headerContent";
import Logo from "/public/logoLastFm.png";

export const Header = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  return (
    <header className="relative flex h-12 items-center gap-4 bg-black px-4 text-2xl text-white">
      <button className="lg:hidden">
        <HiMenu />
      </button>
      {!isOpenSearch ? (
        <a href="#" className="lg:hidden">
          <IoPersonCircle />
        </a>
      ) : null}

      <div className="absolute left-1/2 h-full -translate-x-1/2 p-3">
        <img className="block" src={Logo} alt="Las.fm logo" />
      </div>
      <button
        onClick={() => setIsOpenSearch((prev) => !prev)}
        className="ml-auto"
      >
        {!isOpenSearch ? <FiSearch /> : <IoClose />}
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
      {isOpenSearch ? (
        <form className="absolute bottom-0 right-0 left-0 z-10 flex translate-y-full items-center gap-4 border-t border-lastfm-mineshaft bg-black lg:top-0 lg:translate-y-0 lg:border-t-0">
          <input
            className="flex-1 bg-transparent px-4 py-1 text-base focus:outline-0"
            placeholder="Search for music..."
            type="search"
          />
          <button
            className="hidden lg:block"
            onClick={() => setIsOpenSearch(false)}
          >
            <IoClose />
          </button>
          <button className="h-full bg-red-700 px-4">
            <FiSearch />
          </button>
        </form>
      ) : null}
    </header>
  );
};
