import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
import Equipo from "./pages/Equipo"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/bios.fc' element={<Equipo />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
