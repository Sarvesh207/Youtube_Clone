import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { BsFire, BsMusicNoteBeamed, BsTrophyFill } from "react-icons/bs";
import { PiFilmSlateBold, PiStudent } from "react-icons/pi";
import { CiStreamOn } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { BiNews } from "react-icons/bi";
import { RiBrushFill } from "react-icons/ri";
import {
  MdHistory,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
} from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null; //rearly return pattern
  return (
    <>
      <div className="shadow-lg fixed left-0 h-[calc(100vh-3rem)] w-60 overflow-hidden bg-white  font-medium hover:overflow-y-scroll ">
        <ul className="w-56 p-3 mt-4">
          <Link to="/">
            <li className="flex justify-start gap-3 items-center rounded-xl py-2 pl-2 hover:bg-gray-200">
              <MdHome className="mr-2 text-2xl " /> <p>Home</p>
            </li>
          </Link>
          <Link to="/results?search_query=trending">
            <li className="flex justify-start gap-3 items-center rounded-xl py-2 pl-2 hover:bg-gray-200">
              <BsFire className="mr-2 text-xl" /> Trending
            </li>
          </Link>
          <Link to="/results?search_query=music">
            <li className="flex justify-start gap-3 items-center rounded-xl py-2 pl-2 hover:bg-gray-200">
              <BsMusicNoteBeamed className="mr-2 text-xl" /> Music
            </li>
          </Link>
          <Link to="/results?search_query=films">
            <li className="flex justify-start gap-3 items-center rounded-xl py-2 pl-2 hover:bg-gray-200">
              <PiFilmSlateBold className="mr-2 text-2xl" /> Films
            </li>
          </Link>
          <Link to="/results?search_query=lives">
            <li className="flex justify-start gap-3 items-center rounded-xl py-2 pl-2 hover:bg-gray-200">
              <CiStreamOn className="mr-2 text-2xl" /> Lives
            </li>
          </Link>
          <Link to="/results?search_query=gaming">
            <li className="flex justify-start gap-3 items-center rounded-xl py-2 pl-2 hover:bg-gray-200">
              <SiYoutubegaming className="mr-2 text-xl" /> Gaming
            </li>
          </Link>
          <Link to="/results?search_query=news">
            <li className="flex justify-start gap-3 items-center rounded-xl py-2 pl-2 hover:bg-gray-200">
              <BiNews className="mr-2 text-2xl" />
              News
            </li>
          </Link>
          <Link to="/results?search_query=sports">
            <li className="flex justify-start gap-3 items-center rounded-xl py-2 pl-2 hover:bg-gray-200">
              <BsTrophyFill className="mr-2 text-xl" /> Sports{" "}
            </li>
          </Link>
          <Link to="/results?search_query=learning">
            <li className="flex justify-start gap-3 items-center rounded-xl py-2 pl-2 hover:bg-gray-200">
              <PiStudent className="mr-2 text-2xl" /> Learning
            </li>
          </Link>
          <Link to="/results?search_query=fashion">
            <li className="flex justify-start gap-3 items-center rounded-xl py-2 pl-2 hover:bg-gray-200">
              <RiBrushFill className="mr-2 text-2xl" /> Fashion
            </li>
          </Link>
        </ul>

        <hr />
        <ul className="w-56 p-3 mt-4">
          {/* <li className="flex justify-start gap-3 items-center rounded-xl py-2 pl-2 hover:bg-slate-400">
            <MdOutlineVideoLibrary className="mr-2 text-2xl" />
            Library
          </li> */}

          {/* <li className="flex justify-start gap-3 items-center rounded-xl py-2 pl-2 hover:bg-slate-400">
            <MdHistory className="mr-2 text-2xl" />
            History
          </li>
          <li className="flex justify-start gap-3 items-center rounded-xl py-2 pl-2 hover:bg-slate-400">
            <MdOutlineWatchLater className="mr-2 text-2xl" />
            Watch Later
          </li>
          <li className="flex justify-start gap-3 items-center rounded-xl py-2 pl-2 hover:bg-slate-400">
            <AiOutlineLike className="mr-2 text-2xl" />
            Liked
          </li> */}
        </ul>
        {/* <hr /> */}
        <div className="flex flex-col px-3 py-2">
          <p className="mb-2 text-center">
            About Press Copy right Contact us Creator Advertise Developers.
          </p>

          <p className="mb-2 text-center">
            Terms Privacy Policy & Safety How YouTube worksTest new features.
          </p>
          <p className="mb-2 text-center text-sm font-mono">
            developed by @sarveshgaynar
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
