import Header from "../../../shared/components/Header";
import Footer from "../../../shared/components/Footer";
import { CartProvider } from '../../../features/cart/hooks/CartContext'
import { Cart } from '../../../features/cart/components/Cart'
import judorigen from '../../../shared/assets/images/judorigen.png'
import '../../../main.css'

const Origen = () => {
    return(
        <section>
            <div className="App">
                
                
                <Header />
                <section id="sectiontitle">
                    <h2>ORIGEN</h2>
                </section>
                <section className="sectionorigen p">
                    <h2>El origen del Judo</h2>
                    <p> El Judo fue creado por el maestro japones Jigoro Kano en 1882 y se deriva del jiu-jitsu tradicional japonés.
                    El judo fue creado como un arte marcial ecléctico, distinguiéndose de sus predecesores debido a un énfasis en el sparring libre y 
                    la eliminación de los elementos de golpeo y entrenamiento con armas.
                    <br />
                    <br />Kanō recopiló la esencia técnica (proyecciones, luxaciones, inmovilizaciones, estrangulaciones, desarmes y golpes) y táctica 
                    (desplazamientos, posicionamientos, transiciones, métodos de respiración, etc.) de dos de las antiguas escuelas 
                    clásicas de combate cuerpo a cuerpo japonés medievales, adaptándolas a la simulación de un combate deportivo (Randori) en tiempo real.
                    
                    </p>
                    <img id="imgjudor" src={judorigen} alt="" />
                    
                </section>
                <Cart />
                <Footer />
           </div>
        </section>  
    )
}

export default Origen;