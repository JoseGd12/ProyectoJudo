

const Footer = () => {
  return (
    <footer className="judo-footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>JUDO Y JIU-JITSU</h3>
          <p>El camino de la suavidad y la adaptabilidad</p>
          <div className="contact">
            <span><i className="fas fa-envelope"></i> josedavidgd71@gmail.com</span>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="judo.html">Inicio</a></li>
            <li><a href="origen.html">Origen</a></li>
            <li><a href="tecnicas.html">Técnicas</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Jose Gaviria Duque | Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;