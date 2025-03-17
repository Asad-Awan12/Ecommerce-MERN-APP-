import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Register } from "./Components/Register";
import { Outlet } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-bgPrimary min-h-screen flex flex-col">
        <nav>
          <NavBar />
        </nav>
        <div className="flex-grow mb-5">
          <Outlet />
        </div>
        <hr />
        <footer className="mt-auto"><Footer /></footer>
      </div>
    </>
  );
}

export default App;
