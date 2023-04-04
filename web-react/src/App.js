import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
