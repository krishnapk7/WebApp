import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import StartScreen from "./screens/StartScreen";
import { Auth0Provider } from "@auth0/auth0-react";
import { ProtectedRoute } from "./components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Auth0Provider
          domain={import.meta.env.VITE_AUTH0_DOMAIN}
          clientId={import.meta.env.VITE_AUTH0_CLIENTID}
          authorizationParams={{
            redirect_uri: "http://127.0.0.1:5173/home/",
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
