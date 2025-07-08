import Header from "../../../shared/components/Header";
import Footer from "../../../shared/components/Footer";
import { CartProvider } from '../../../features/cart/hooks/CartContext'
import { Cart } from '../../../features/cart/components/Cart'

import '../../../main.css'

const Tecnicas = () => {
    return(
        <section>
            <div className="App">
                
                
                <Header />
                <section id="sectiontitle">
                    <h2>TECNICAS</h2>
                </section>
                <section className="sectionjudo p">
                    <p>En el judo las existen tecnicas de pie y tecnicas en el suelo. <br /> En el judo hay muchas mas tecnicas de pie, las cuales tienen
                    como proposito desequilibrar al rival.
                    Aqui un ejemplo.
                    </p>
                    <iframe id="videouchimata" src="https://www.youtube.com/embed/IhPBcyRIAfg?autoplay=1&mute=1" width="370" height="658" frameborder="0"  
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loop>
                    </iframe>
      


                </section>
                 <Cart />
                <Footer />
            </div>
        </section>  
    );
}

export default Tecnicas;