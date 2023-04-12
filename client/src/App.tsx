import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
// import { AuthProvider, RequireAuth } from "react-auth-kit";
import StartScreen from "./screens/StartScreen";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Auth0Provider
          domain={import.meta.env.VITE_AUTH0_DOMAIN}
          clientId={import.meta.env.VITE_AUTH0_CLIENTID}
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <Routes>
            <Route path="/" element={<StartScreen />} />
            <Route path="login/" element={<LoginScreen />} />
            <Route path="home/" element={<HomeScreen />} />
          </Routes>
        </Auth0Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
