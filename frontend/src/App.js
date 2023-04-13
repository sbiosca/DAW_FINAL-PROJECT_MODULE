import logo from './logo.svg';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
import Equipo from "./pages/Equipo"
import Shop from "./pages/Shop"
import Login from './pages/Users/Login'
import Register from './pages/Users/Register'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/bios.fc' element={<Equipo />} />
          <Route exact path='/shops' element={<Shop />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
