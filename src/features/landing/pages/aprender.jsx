import Header from "../../../shared/components/Header";
import Footer from "../../../shared/components/Footer";
import { CartProvider } from '../../../features/cart/hooks/CartContext'
import { Cart } from '../../../features/cart/components/Cart'
import { Form } from "../../../features/landing/components/form"
import '../../../main.css'

const Aprender = () =>{
    return(
        <section>
            <div className="App">
                
                
                <Header />
                <section id="sectiontitle">
                    <h2>APRENDE</h2>
                </section>
                
                <Cart />
                ㅤ
                <Form />
                <Footer />
            </div>
        </section>  
    );
}

export default Aprender;