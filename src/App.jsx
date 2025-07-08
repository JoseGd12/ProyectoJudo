import Header from "./shared/components/Header";
import ObiSection from "./features/landing/components/ObiSection";
import BeltCarousel from "./features/landing/components/BeltCarousel";
import Footer from "./shared/components/Footer";
import { Form } from "./features/landing/components/form";
import { ProductProvider } from './shared/contexts/ProductContext';
import InformacionProductos from './features/landing/components/InformacionProductos';
import { CartProvider } from './features/cart/hooks/CartContext';
import { Cart } from './features/cart/components/Cart';
import "bootstrap/dist/css/bootstrap.min.css";
import './main.css';
import './features/landing/styles/cards.css';
import './features/landing//styles/obi.css';
import './features/landing//styles/carousel.css';
import './features/landing//styles/form.css';
import './features/landing//styles/judoProducts.css';
import './shared/styles/footer.css';
import './shared/styles/cart.css';
import Inicio from "./features/landing/pages/inicio";
import Niveles from "./features/landing/pages/niveles";
import Origen from "./features/landing/pages/origen";
import Funcionamiento from "./features/landing/pages/funcionamiento";
import Tecnicas from "./features/landing/pages/tecnicas";
import Productos from "./features/landing/pages/productos";
import Aprender from "./features/landing/pages/aprender";
import InicioSesion from "./features/landing/pages/inicioSesion"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store'
import AuthContainer from "./features/auth/components/authCont"
import './shared/styles/loginStyle.css'
import './shared/styles/dashBStyle.css'


function App() {
  return (
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/origen" element={<Origen />} />
      <Route path="/niveles" element={<Niveles />} />
      <Route path="/funcionamiento" element={<Funcionamiento />} ></Route>
      <Route path="/tecnicas" element={<Tecnicas />}></Route>
      <Route path="/productos" element={<Productos />}></Route>
      <Route path="/aprende" element={<Aprender />}></Route>
      <Route path="/login" element={<InicioSesion />}></Route>
      
    
    </Routes>
    </Provider>
    
  );
}

export default App;