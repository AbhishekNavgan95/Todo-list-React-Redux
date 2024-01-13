import Header from "./components/Header";
import Addtodo from "./components/Addtodo";
import Listtodos from "./components/Listtodos";
import { useSelector } from "react-redux";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function App() {
  const [addTask, setAddTask] = useState(false);
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className={darkMode ? "bg-gray-900" : "bg-gray-500"}>
      <Header />
      <div className="min-h-screen max-w-[800px] mx-auto px-4">
        <div className="max-w-[800px] mx-auto my-5 bg-gray-600 rounded-xl px-3">
          <button
            onClick={() => setAddTask(!addTask)}
            className="flex justify-between items-center w-full px-5 text-gray-300 py-3"
          >
            Add a task
            {addTask ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {addTask ? <Addtodo addTask={addTask} /> : null}
        </div>
          <Listtodos />
      </div>
    </div>
  );
}

export default App;
