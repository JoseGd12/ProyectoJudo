import Header from "../../../shared/components/Header";
import Footer from "../../../shared/components/Footer";
import { CartProvider } from '../../../features/cart/hooks/CartContext'
import { Cart } from '../../../features/cart/components/Cart'
import { ProductProvider } from '../../../shared/contexts/ProductContext';
import InformacionProductos from '../../../features/landing/components/InformacionProductos';
import '../../../main.css'

const Productos = () => {
    return(
        <section>
            <div className="App">
                
                
                <Header />
                <section id="sectiontitle">
                    <h2>PRODUCTOS</h2>
                </section>
                ㅤ 
                <Cart />
                <ProductProvider>
                    <InformacionProductos />
                </ProductProvider>
                <Footer />
            </div>
        </section>  
    );
}

export default Productos;