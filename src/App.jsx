/* eslint-disable no-unused-vars */

import { useState } from "react";
import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";
import "./App.css";
import Page1 from "./Page1";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
