import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Admin from './components/Admin';
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} />
      </Switch>
    <Footer />
    </>
  );
}

export default App;