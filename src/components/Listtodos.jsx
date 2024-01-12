import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../slices/todoSlice";
import { AiFillDelete } from "react-icons/ai";
import { MdDoneOutline } from "react-icons/md";

const Listtodos = () => {
  const [markDone, setMarkDone] = useState([]);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const toggleMarkDone = id => {
    if(markDone.includes(id)) {
        setMarkDone(prevMarkDone => prevMarkDone.filter(todoId => todoId !== id))
    }
    else {
      setMarkDone((prev) => [...prev, id])
    }
  }

  return (
    <div className="max-w-[800px] mx-auto rounded-xl bg-gray-600 p-3 text-white border">
      <div className="flex flex-col gap-3">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div
              key={todo.id}
              className={
                markDone.includes(todo.id)
                  ? "border rounded-xl py-2 px-4 flex items-center text-xl justify-between bg-green-600 gap-3"
                 : "border rounded-xl py-2 px-4 flex items-center text-xl justify-between bg-slate-800 gap-3"
              }
            >
             {todo.text}
              <div className="flex gap-3">
                <button
                  onClick={() => toggleMarkDone(todo.id)}
                  className="bg-red-600 px-4 py-1  rounded-full border text-lg"
                >
                  <MdDoneOutline/>
                </button>
                <button
                onClick={()=> dispatch(removeTodo(todo.id))}
                className="bg-emerald-500 px-4 py-1  rounded-full border text-lg">
                  <AiFillDelete/>
                </button>
              </div>
            </div>
          ))
        ) 
        : (
          <div className="border rounded-xl py-2 px-4 flex items-center text-xl justify-between bg-gray-800">
            No tasts available
          </div>
        )
        }
      </div>
    </div>
  );
};

export default Listtodos;
