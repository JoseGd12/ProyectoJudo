import Header from "../../../shared/components/Header";
import Footer from "../../../shared/components/Footer";
import { CartProvider } from '../../../features/cart/hooks/CartContext'
import { Cart } from '../../../features/cart/components/Cart'
import AuthContainer from "../../../features/auth/components/authCont"
import '../../../main.css'
import { Link } from "react-router-dom";

const InicioSesion = () => {
    return(
        <section>
        
        <button className="inicioBtn"><Link className="Link" to="/">Inicio</Link></button>
        <br /> <br />
        <br />
        <div className="separation2"></div>
        
        <AuthContainer></AuthContainer>
        ㅤ
        ㅤ
        ㅤ
        <Footer />
        </section>
        
    );
}

export default InicioSesion;