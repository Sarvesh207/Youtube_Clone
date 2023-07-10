import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import InputSearch from "./InputSearch";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHnadeler = () => {
    dispatch(toggleMenu());
  };
  return (<>
    {/* <div className="z-50 sticky top-0 flex flex-row items-center justify-between h-14 md:px-5  bg-gray-50 overflow-hidden   ">
      <div className="flex col-span-1  ">
        <img
          className="mr-5 h-8 cursor-pointer rounded-full hover:bg-gray-200"
          onClick={() => toggleMenuHnadeler()}
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="menu-btn"
        />
        <a href="">
          <img
            className="h-7 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
            alt="Youtube-logo"
          />
        </a>
      </div>
      <InputSearch />
      <div className="flex w-48 items-center justify-end">
        <img
          className="h-10"
          src="https://freesvg.org/img/abstract-user-flat-4.png"
          alt="profile-img"
        />
      </div>
    </div> */}
    <div className="sticky top-0 z-50 flex h-14 justify-between bg-white shadow-sm px-6 py-2">
        <div className="flex w-48 items-center">
          <img
            className="mr-5 h-8 cursor-pointer rounded-full hover:bg-gray-200"
            src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
            alt="Hamburger-icon"
            onClick={() => toggleMenuHnadeler()}
          
          />
          <Link to="/">
            <img
              className="h-6 cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
              alt="logo-img"
             
            />
          </Link>
        </div>

        <InputSearch />

        <div className="flex w-48 items-center justify-end">
          {/* <img className="h-10" src="https://freesvg.org/img/abstract-user-flat-4.png" alt="profile-img" /> */}
          
        </div>
      </div>
    
    </>
  );
};

export default Head;
