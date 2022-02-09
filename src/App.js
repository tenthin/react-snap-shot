import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';

const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/service" component={Service}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect to="/"/>
    </Switch>
   
      <h1>Welcome</h1>
    </>
  );
}

export default App;
