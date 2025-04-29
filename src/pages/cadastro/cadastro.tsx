import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import '../../assets/cadastro.css'

type Cargo = {
  id: string;
  nome: string;
};


interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio:string;
  contato:string;
  cargo:Cargo | null;
}
const availableJobs: Cargo[] = [
  { id: '1', nome: 'Desenvolvedor Front-end' },
  { id: '2', nome: 'Desenvolvedor Back-end' },
];

export default function Register() {
  const [formData, setFormData] = useState<RegisterForm>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio:'',
    contato:'',
    cargo: null
    
  });


  const [errors, setErrors] = useState<Partial<RegisterForm>>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<RegisterForm> = {};
    
    if (formData.name.length < 3) {
      newErrors.name = 'Nome deve ter pelo menos 3 caracteres';
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor, insira um e-mail válido';
    }
    
    if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      console.log('Dados de cadastro:', formData);
      alert('Cadastro realizado com sucesso!');
      navigate('/login');
    }
  };

  return (
    <div className="register-page-container">
      <div className='system-register-title'>
        <img src='/capyslogo.png' className='register-title'></img>
        <button className='btn-voltar' onClick={() => navigate('/login')}>voltar</button>
      </div>
      <div className="register-container">
        <div className='title-register'>
          <h1>Cadastro</h1>
          <h2>Rapido e gratis, vamos nessa</h2>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='form-input'
              required
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='form-input'
              required
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className='form-input'
              required
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className='form-input'
              required
            />
            {errors.confirmPassword && (
              <div className="error-message">{errors.confirmPassword}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Bio</label>
            <input
              type="text"
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className='form-input'
              required
            />
            {errors.confirmPassword && (
              <div className="error-message">{errors.confirmPassword}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Contato</label>
            <input
              type="text"
              id="contato"
              name="contato"
              value={formData.contato}
              onChange={handleChange}
              className='form-input'
              required
            />
            {errors.confirmPassword && (
              <div className="error-message">{errors.confirmPassword}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Selecionar Cargo</label>
            <select
            
            id="cargo"
            name="cargo"
            className='select-input'
            value={formData.cargo?.id || ''}
            
            
            required
          >
            <option value="" disabled>
              Selecione seu cargo
            </option>
            {availableJobs.map((cargo) => (
              <option key={cargo.id} value={cargo.id}>
                {cargo.nome}
              </option>
            ))}
          </select>
            {errors.confirmPassword && (
              <div className="error-message">{errors.confirmPassword}</div>
            )}
          </div>
          
          <button type="submit" className="login-button">Cadastrar</button>
        </form>
        
      </div>
    </div>
  );
}