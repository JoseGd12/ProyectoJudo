import Header from "./shared/components/Header";
import ObiSection from "./features/landing/components/ObiSection";
import BeltCarousel from "./features/landing/components/BeltCarousel";
import Footer from "./shared/components/Footer";
import { Form } from "./features/landing/components/form"
import { ProductProvider } from './shared/contexts/ProductContext';
import InformacionProductos from './features/landing/components/InformacionProductos';
import { CartProvider } from './features/cart/hooks/CartContext'
import { Cart } from './features/cart/components/Cart'
import "bootstrap/dist/css/bootstrap.min.css";
import './main.css';
import './features/landing/styles/cards.css';
import './features/landing//styles/obi.css';
import './features/landing//styles/carousel.css';
import './features/landing//styles/form.css';
import './features/landing//styles/judoProducts.css';
import './shared/styles/footer.css';
import './shared/styles/cart.css'


function App() {
  return (
    <CartProvider>
      <div className="App">
        <section id="sectionsup">
          <h1><b>JUDO</b></h1>
        </section>
        
        <Header />
        <Cart />
        
      
        
        <section className="sectioncontent">
          <ObiSection />
          
          <BeltCarousel />
        </section>

        <div className="separation2"/>

        <Form />
        <br />
        <div className="separation2"/>

        <ProductProvider>
          <InformacionProductos />
        </ProductProvider>
        
        <Footer />
      </div>
    </CartProvider>  
  );
}

export default App;