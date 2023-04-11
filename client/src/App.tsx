import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import "./App.css";
import { AuthProvider, RequireAuth } from "react-auth-kit";

function App() {
  return (
    <div className="App">
      <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
        >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterScreen />} />
          <Route path="login/" element={<LoginScreen />} />
          <Route path="home/" element={<RequireAuth loginPath='/login'><HomeScreen /></RequireAuth>} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
