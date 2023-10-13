import React, { Component } from 'react'
import NavBar from './components/Navbar';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Posts from './components/Posts';


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <NavBar />
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route path='/ContactUs' Component={ContactUs} />
            <Route path='/About' Component={About} />
            <Route path='/:id' Component={Posts} />
          </Routes>
        </div>
      </BrowserRouter >
    )
  }
}
export default App