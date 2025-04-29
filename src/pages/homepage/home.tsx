import { useNavigate } from 'react-router-dom';
import '../../assets/home.css'

export default function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/login'); 
  }

  return (
    <div className="home-container">
    
        <div className="header-home">
            <img 
              src="/capyslogo.png" 
              alt="Logo" 
              className="logo-img" 
            />
          <button
            onClick={handleLogout}
            className="btn-sair">
            Sair
          </button>
        </div>
  

    
      
        <div className="home-ola">
          <h2 className="">Olá, Teste CAPYS</h2>
          <p className="">Desenvolvedor Front-end</p>
        </div>
        
    <div className='home-footer'>
        <h2 className="">
          Que pena estamos em desenvolvimento :(
        </h2>
        <p>
            Nossa aplicação está em desenvbolvimento, em breve teremos novidade
        </p>
        
    </div>
        
      
    </div>
  );
}
