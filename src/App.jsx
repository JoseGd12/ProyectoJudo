import Header from "./components/Header";
import ObiSection from "./components/ObiSection";
import BeltCarousel from "./components/BeltCarousel";
import Footer from "./components/Footer";
import { Form } from "./components/form"
import { ProductProvider } from './context/ProductContext';
import InformacionProductos from './components/InformacionProductos';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/main.css';
import './styles/cards.css';
import './styles/obi.css';
import './styles/carousel.css';
import './styles/form.css';
import './styles/judoProducts.css';
import './styles/footer.css';


function App() {
  return (
    <div className="App">
      <section id="sectionsup">
        <h1><b>JUDO</b></h1>
      </section>
      
      <Header />
      
     
      
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
  );
}

export default App;