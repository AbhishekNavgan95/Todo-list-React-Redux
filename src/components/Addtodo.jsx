import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";

const Addtodo = () => {

  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  }

  return (
    <div className="py-5 my-10">
      <div>
        <form action="">
          <div className="flex gap-5 justify-center">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="bg-gray-600 border text-white py-2 px-4 text-2xl rounded-xl"
              placeholder="Add todo"
            />
            <button
              onClick={submitHandler}
              className="text-white border bg-green-700 py-2 px-9 text-xl rounded-xl "
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addtodo;
