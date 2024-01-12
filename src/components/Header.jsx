import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../slices/DarkModeSlice";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className=" bg-gray-600 ">
      <div className="max-w-[1000px] mx-auto flex justify-between items-center gap-4">
        <div className=" text-4xl py-5 text-white">List your Todos here</div>
        <button
          onClick={() => dispatch(toggleDarkMode(!darkMode))}
          className="px-4 py-2 text-white  rounded-full border text-lg"
        >
          {
            darkMode ? <MdDarkMode/ >: <MdOutlineLightMode />
          }
        </button>
      </div>
    </div>
  );
};

export default Header;
