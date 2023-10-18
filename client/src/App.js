import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import Adhar from "./pages/Adhar";
import Otp from "./pages/Otp";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";


function App() {
  return (
    <React.StrictMode>
    <>
      <BrowserRouter>
      <Routes>
        
        <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
          
        <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
        <Route
              path="/Adhar"
              element={
                <ProtectedRoute>
                  <Adhar />
                </ProtectedRoute>
              }
            />
        <Route path="/Otp" element={<Otp/>}/>
        
      </Routes>
      </BrowserRouter>
    </>
    </React.StrictMode>
  )
}

export default App

