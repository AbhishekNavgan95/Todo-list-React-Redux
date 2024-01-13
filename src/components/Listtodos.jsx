import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../slices/todoSlice";
import { AiFillDelete } from "react-icons/ai";
import { MdDoneOutline } from "react-icons/md";
import { markDone } from "../slices/todoSlice";

const Listtodos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-[800px] mx-auto rounded-xl bg-gray-600 p-3 text-white">
      <div className="flex flex-col gap-3">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div
              key={todo.id}
              className={
                todo.isDone
                ? "border border-gray-400 rounded-xl py-2 px-4 flex items-center text-xl justify-between bg-emerald-800 gap-3"
                : "border border-gray-400 rounded-xl py-2 px-4 flex items-center text-xl justify-between bg-gray-700 gap-3"
              }
            >
              {todo.text}
              <div className="flex gap-3">
                <button
                  onClick={() => dispatch(markDone(todo.id))}
                  className="bg-green-800 hover:bg-green-900 transition-color duration-300 border-gray-400  px-4 py-1  rounded-full border text-lg"
                  >
                  <MdDoneOutline />
                </button>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="bg-red-600 hover:bg-red-700 transition-color duration-300 border-gray-400  px-4 py-1  rounded-full border text-lg"
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="border rounded-xl py-2 px-4 flex items-center text-xl justify-between bg-gray-800">
            No tasts available
          </div>
        )}
      </div>
    </div>
  );
};

export default Listtodos;
