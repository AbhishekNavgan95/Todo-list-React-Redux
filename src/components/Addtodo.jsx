import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";
import toast from "react-hot-toast";
import { MdFormatListBulletedAdd } from "react-icons/md";

const Addtodo = () => {
  const [value, setValue] = useState(["", false]);
  const dispatch = useDispatch();
  function submitHandler(e) {
    e.preventDefault();

    if (value[0] === "") {
      toast.error("please add a task!");
      return;
    }

    dispatch(addTodo(value));
    setValue(["", false]);
  }

  return (
    <form action="">
      <div className="py-3 px-3 w-full">
        <div className="flex gap-5">
          <input
            type="text"
            value={value[0]}
            onChange={(e) => setValue([e.target.value, false])}
            className="bg-gray-600 w-full text-white py-1 px-2 text-xl focus:outline-none rounded-xl"
            placeholder="Type your task here..."
          />
          <button
            onClick={submitHandler}
            className="text-white bg-green-700 hover:bg-green-800 transition-color duration-300 px-4 text-xl rounded-xl "
          >
            <MdFormatListBulletedAdd />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Addtodo;
