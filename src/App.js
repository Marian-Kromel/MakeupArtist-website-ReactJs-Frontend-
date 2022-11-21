import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Index from "./Components/Index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />{" "}
          <Route path="/Contact" element={<Contact />} />{" "}
        </Routes>{" "}
      </BrowserRouter>
    );
  }
}

export default App;
