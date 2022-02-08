import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';


const App = () => {
  return (
    <>
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/service" component={Service}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
   
      <h1>Welcome</h1>
    </>
  );
}

export default App;
