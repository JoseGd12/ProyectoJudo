import Header from "../../../shared/components/Header";
import Footer from "../../../shared/components/Footer";
import { CartProvider } from '../../../features/cart/hooks/CartContext'
import { Cart } from '../../../features/cart/components/Cart'
import jufunctimg from '../../../shared/assets/images/jufunctimg.png'
import '../../../main.css'

const Funcionamiento = () => {
    return(
        <section>
            <div className="App">
                
                <Header />
                <section id="sectiontitle">
                    <h2>FUNCIONAMEINTO</h2>
                </section>
                <section class="sectionfuncion p">
                    <h2>El funcionamiento del judo</h2>
                    <p> El judo como deporte permite una educación física integral, potenciando por medio de la práctica de sus técnicas 
                    las posibilidades psicomotrices, tales como la ubicación espacial, la perspectiva, el ambidextrismo, la lateralidad, 
                    la coordinación conjunta e independiente de ambas manos y pies, y las diferentes acciones motrices como lanzar, tirar, 
                    empujar, arrastrarse, saltar, rodar, caer, entre otras. <br />
                    <img src={jufunctimg} alt="" /><br />
                    En el estudio del judo, la no resistencia constituye un principio técnico primordial. Un judoca debe sumarse a la fuerza
                    de su oponente conforme si se es empujado o se tira de él, ya que, al obrar así, no solamente se anula el esfuerzo contrario
                    y se optimiza el gasto de la propia energía, sino que facilita más la conservación del equilibrio que si ofreciera resistencia,
                    al tiempo que se debilita el equilibrio del oponente.</p>
                
                </section>
                <Cart />
                <Footer />
            </div>
        </section>  
    )
}

export default Funcionamiento;