import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 
import About from './components/About'; 
import Nav from './components/Nav'
import Footer from './components/Footer'
import './App.css';
import './styles/style2.css'
 
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="App">

        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />

       
  
        {/* <div className="navigation">
          <div className="navigation-sub">
                                          
    
            <Link to="/" className="item">About</Link>
            <Link to="/contact" className="item">Contact</Link>
            <Link to="/projects" className="item">Projects</Link>
  
          </div>
        </div> */}
      </div>
      <Footer />
    </BrowserRouter>
  );
}
 
export default App;
