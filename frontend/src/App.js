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
import Entradas from "./pages/Entradas"
import Partidos from "./pages/Partidos"
import Dashboard from "./pages/Dashboard"
import AddPartidos from './components/dashboard/AddPartidosDashboard';
import Integrantes from "./pages/Integrantes"
import Shop from "./pages/Shop"
import Login from './pages/Users/Login'
import Register from './pages/Users/Register'
import {UserContextProvider} from './context/UserContext'
import {ProductsContextProvider} from './context/ProductsContext'
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
          <ProductsContextProvider>
            <Header />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/bios.fc' element={<Equipo />} />
              <Route exact path='/partidos' element={<Partidos />} />
              <Route exact path='/partidos/:id' element={<Partidos />} />
              <Route exact path='/shops' element={<Shop />} />
              <Route exact path='/entradas' element={<Entradas />} />
              <Route exact path='/integrantes' element={<Integrantes />} />
              {/* <Route element={<AuthGuardUser />}> */}
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              {/* </Route> */}
              {/* <Route element={<AuthGuardNotUser />}> */}
              <Route path='/profile' element={<Profile />} />
              {/* </Route> */}
              {/* <Route element={<AuthGuardAdmin />}> */}
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/dashboard/add_partidos' element={<AddPartidos />} />
              {/* </Route> */}
            </Routes>
            <ToastContainer />
            <Footer />
          </ProductsContextProvider>
        </UserContextProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
