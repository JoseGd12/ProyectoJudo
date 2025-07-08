import jiujibanner from '../assets/images/jiujibanner.png'
import { CartButton } from '../../features/cart/components/CartButton';
import { Link } from 'react-router-dom'
import { useAuth } from '../../features/auth/hooks/useAuth';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  
  return (
    <header id="header">
      <section id="sectionsup">
      </section>
      <h1>
      {isAuthenticated ? (
        <div className="sectitle">
          
          <button className="loginBtn"><Link className="Link" to="/login"> {user?.role === 'admin' ? 'Panel Administrativo' : 'Panel de Administración'} </Link></button>
          <button className="logoutBtn" onClick={logout}><Link className="Link" to="/">Cerrar Sesión</Link></button> <b>JUDO</b>
          
          
        </div>
        

      ) : (
        <div className="sectitle">
          <button className="login0Btn"><Link className="Link" to="/login"> Iniciar Sesión </Link></button><b>JUDO</b>
      
        </div>
      )
      }
      </h1> 
      
      
      <ul id="lista">
        <li><Link className="link" to="/">Inicio</Link></li>
        <li><Link className="Link" to="/origen">Origen</Link></li>
        <li><Link className="Link" to="/funcionamiento">Funcionamiento</Link></li>
        <li><Link className="Link" to="/niveles">Niveles</Link></li>
        <li><Link className="Link" to="/tecnicas">Técnicas</Link></li>
        <li><Link className="Link" to="/productos">Productos</Link></li>
        <li><Link className="Link" to="/aprende">Aprende</Link></li>
         
      </ul>
      <CartButton />

      <div className="sectionbanner">
        <img id="imag1" src={jiujibanner} alt="Judo banner" />
        <div className="overlay"></div>
      </div>

      


    </header>
    
  );
};

export default Header;