import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header, Main, Sidebar } from "./components";
import { About, HomePage } from "./pages";
import Data from "./pages/Data";

const App = () => {
  const date = new Date();
  return (
    <div>
      <Header />
      <div>
        <Link to="/home"> Homepage</Link>
        <Link to="/about"> About</Link>
        <Link to="/data"> Data</Link>
        <Main userName="Ellis" num={5} />
        <Sidebar message={date.toLocaleTimeString()} />
      </div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </div>
  );
};

export default App;
