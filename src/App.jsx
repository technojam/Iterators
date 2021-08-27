import React from 'react';
import { BrowserRouter } from "react-router-dom"
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    </BrowserRouter>
  );
}

export default App;
