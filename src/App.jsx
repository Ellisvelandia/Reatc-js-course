import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header, Main, Sidebar } from "./components";
import { About, HomePage } from "./pages";

const App = () => {
  const date = new Date();
  return (
    <div>
      <Header />
      <div>
        <Link to="/home"> Homepage</Link>
        <Link to="/about"> About</Link>
        <Main userName="Ellis" num={5} />
        <Sidebar message={date.toLocaleTimeString()} />
     
      </div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
