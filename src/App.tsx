
import Register from "./pages/cadastro/cadastro"
import Login from "./pages/login/login"
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App
