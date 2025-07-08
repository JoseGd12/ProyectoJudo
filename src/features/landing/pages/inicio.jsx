import Header from "../../../shared/components/Header";
import Footer from "../../../shared/components/Footer";
import { CartProvider } from '../../../features/cart/hooks/CartContext'
import { Cart } from '../../../features/cart/components/Cart'
import jigorokano from '../../../shared/assets/images/jigorokano.png'
import '../../../main.css'


const Inicio = () => {
    return(
        <section>
            <div className="App">
                
                
                <Header />
                <section id="sectiontitle">
                    <h2>INICIO</h2>
                </section>
                
                <section className="sectionjudo p">
                    
                    <h3>¿Que es el Judo?</h3>
                    <p> El judo es un arte marcial japonés moderno creado por <b>Jigorō Kanō</b> en 1884. 
                    Se trata también de un deporte olímpico desde 1964.
                    El término japonés puede traducirse como el camino de la suavidad,
                    influyendo en el desarrollo físico, mental y emocional a través de la práctica.</p>
                    <div id="jigoimgdiv"> 
                        <img id="jigoroimg" src={jigorokano} alt="" />
                    </div>
                </section>

                <Cart />
                <Footer />
            </div>
        </section>  
    );
};

export default Inicio;