import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../assets/login.css';
import '../../auth.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados de login:', { email, password });
    // Lógica de autenticação aqui
  };

  const navigateToCadastro = () => {
    console.log('Redirecionando para /register'); 
    navigate('/register',{ replace: true });
  };

  return (
  
    <div className="login-page-container">
       
      <img src='/capyslogo.png' className="system-title"></img>

    <div className='login-container'>
      
      <h2 className='login-title'>Login</h2>
      
      <form onSubmit={handleSubmit} className="login-form">
        <div className='form-group'>
          <label>E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label style={{  display: 'block', marginBottom: '5px' }}>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </div>
        
        <button
        onClick={()=>{navigate('/homepage')}}
          className="login-button"
        >
          Entrar
        </button>
      </form>

      <div >
      <span className="prompt-text">Ainda não possui uma conta?</span>
        <button
          onClick={() => navigateToCadastro()}
          className="register-button"
        >
          Criar conta
        </button>
      </div>
    </div>
    </div>
  );
}