
import Register from "./pages/cadastro/cadastro"
import Login from "./pages/login/login"
import HomePage from "./pages/homepage/home";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  );
}

export default App
