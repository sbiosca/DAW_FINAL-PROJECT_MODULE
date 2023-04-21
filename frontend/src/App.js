import logo from './logo.svg';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Equipo from "./pages/Equipo"
import Dashboard from "./pages/Dashboard"
import Shop from "./pages/Shop"
import Login from './pages/Users/Login'
import Register from './pages/Users/Register'
import {UserContextProvider} from './context/UserContext'
import {  ToastContainer } from 'react-toastify';
import AuthGuardAdmin from "./services/AuthSecurity/AuthGuardAdmin";
import AuthGuardUser from "./services/AuthSecurity/AuthGuardUser";
import AuthGuardNotUser from "./services/AuthSecurity/AuthGuardNotUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserContextProvider>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/bios.fc' element={<Equipo />} />
            <Route exact path='/shops' element={<Shop />} />
            {/* <Route element={<AuthGuardUser />}> */}
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            {/* </Route> */}
            {/* <Route element={<AuthGuardNotUser />}> */}
              <Route path='/profile' element={<Profile />} />
            {/* </Route> */}
            {/* <Route element={<AuthGuardAdmin />}> */}
                  <Route path='/dashboard' element={<Dashboard />} />
              {/* </Route> */}
          </Routes>
          <ToastContainer />
          <Footer />
        </UserContextProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
