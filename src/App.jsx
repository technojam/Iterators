import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Admin from './components/Admin';
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/admin" component={Admin} />
    </Switch>
  );
}

export default App;
