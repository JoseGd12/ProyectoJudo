import jiujibanner from '../assets/images/jiujibanner.png'

const Header = () => {
  return (
    <header id="header">
      
      <ul>
        <li><a href="judo.html">Inicio</a></li>
        <li><a href="origen.html">Origen</a></li>
        <li><a href="funct.html">Funcionamiento</a></li>
        <li><a href="judoNiveles.html">Niveles</a></li>
        <li><a href="tecnicas.html">Técnicas</a></li>
      </ul>

      <div className="sectionbanner">
            <img id="imag1" src={jiujibanner} alt="Judo banner" />
            <div className="overlay"></div>
          </div>

      <section id="sectiontitle">
      <h2>NIVELES</h2>
    </section>


    </header>
    
  );
};

export default Header;