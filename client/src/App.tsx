import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
// import { AuthProvider, RequireAuth } from "react-auth-kit";
import StartScreen from "./screens/StartScreen";
import { Auth0Provider } from "@auth0/auth0-react";
import { ProtectedRoute } from "./components/ProtectedRoute";

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
            <Route
              path="home/"
              element={<ProtectedRoute component={HomeScreen} />}
            />
          </Routes>
        </Auth0Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
