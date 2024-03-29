import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../slices/DarkModeSlice";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import logo from "../assets/logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className="bg-gray-700 px-3">
      <div className="max-w-[800px] mx-auto flex px-5 justify-between items-center gap-4">
        <div className="text-3xl py-3 text-white">TODO</div>
        <button
          onClick={() => dispatch(toggleDarkMode(!darkMode))}
          className="py-2 text-white rounded-full text-lg"
        >
          {!darkMode ? <MdDarkMode /> : <MdOutlineLightMode />}
        </button>
      </div>
    </div>
  );
};

export default Header;
