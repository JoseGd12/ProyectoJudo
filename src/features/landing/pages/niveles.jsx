import Header from "../../../shared/components/Header";
import Footer from "../../../shared/components/Footer";
import { CartProvider } from '../../../features/cart/hooks/CartContext'
import { Cart } from '../../../features/cart/components/Cart'
import ObiSection from "../../../features/landing/components/ObiSection"
import BeltCarousel from "../../../features/landing/components/BeltCarousel";

const Niveles = () => {
    return(
        <section>
            <div className="App">
                
                
                <Header />
                <section id="sectiontitle">
      <h2>NIVELES</h2>
    </section>
                <section className="sectioncontent">
                    <ObiSection></ObiSection>
                    <div className="separation2"></div>
                    <BeltCarousel></BeltCarousel>
                </section>
                
                <Cart />
                <Footer />
            </div>
        </section>  
    )
}

export default Niveles;