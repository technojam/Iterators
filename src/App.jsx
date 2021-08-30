import React from 'react';
import { Route, Switch } from "react-router-dom"
import Fullpost from "./components/pages/Fullpost";
import Admin from './components/Admin';
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import { ToastContainer } from "react-toastify"
import Footer from "./components/layout/Footer";


function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/fullpost" component={Fullpost} />
        <Route path="/admin" component={Admin} />
        <Route path="/fullpost" component={Fullpost} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;