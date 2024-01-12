import Header from "./components/Header";
import Addtodo from "./components/Addtodo";
import Listtodos from "./components/Listtodos";
import { useSelector } from "react-redux";

function App() {

  const darkMode = useSelector(state => state.darkMode.darkMode)

  return (
    <div className={
      darkMode? "bg-gray-900" : "bg-gray-400"
    }>
      <Header />
      <div className="min-h-screen max-w-[1200px] mx-auto">
        <Addtodo />
        <Listtodos />
      </div>
    </div>
  );
}

export default App;
