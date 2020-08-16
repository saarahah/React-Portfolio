import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 

import Contact from './Pages/Contact'; 
import About from './Pages/About';
import Projects from './Pages/Projects'; 
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';




 
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="app">
        <Route exact path= "/React-Portfolio" component={About} />
        <Route path= "/React-Portfolio/about" component={About} />
        <Route exact path="/React-Portfolio/contact" component={Contact} />
        <Route exact path="/React-Portfolio/projects" component={Projects} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}
 
export default App;
