import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import {
  IoClose,
  IoPauseCircleOutline,
  IoPersonCircle,
  IoPlayBackSharp,
  IoPlayForwardSharp,
} from "react-icons/io5";
import { FaRecordVinyl, FaRegHeart } from "react-icons/fa";
import { headerContent } from "../content/headerContent";
import Logo from "/public/logoLastFm.png";

export const Header = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  return (
    <header className="relative flex h-12 items-center gap-4 bg-black px-4 text-2xl text-white lg:h-fit lg:px-0 lg:pr-4">
      <div className="hidden gap-1 text-2xl text-lastfm-graphite lg:flex ">
        <button className="mr-8 bg-lastfm-mineshaft p-3 text-4xl">
          <FaRecordVinyl />
        </button>
        <button>
          <IoPlayBackSharp />
        </button>
        <button className="text-4xl">
          <IoPauseCircleOutline />
        </button>
        <button>
          <IoPlayForwardSharp />
        </button>
        <button className="text-base">
          <FaRegHeart />
        </button>
      </div>
      <button className="lg:hidden">
        <HiMenu />
      </button>
      {!isOpenSearch ? (
        <a href="#" className="lg:hidden">
          <IoPersonCircle />
        </a>
      ) : null}
      <div className="absolute left-1/2 top-0 bottom-0 flex h-full -translate-x-1/2 items-center p-3">
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
            type="text"
          />
          <button
            className="hidden lg:block"
            onClick={() => setIsOpenSearch(false)}
          >
            <IoClose />
          </button>
          <button className="h-full px-4 py-3 lg:bg-red-700">
            <FiSearch />
          </button>
        </form>
      ) : null}
    </header>
  );
};
