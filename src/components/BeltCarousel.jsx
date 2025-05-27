import { beltData } from "../data/belts";
import BeltCard from "./BeltCard";
import { Carousel } from "react-bootstrap";
import '../styles/carousel.css'; 

const BeltCarousel = () => {
  return (
    <div className="belt-carousel-section">
      <div className="belt-carousel-header">
        <h3><b>CLASIFICACIÓN</b></h3>
        <h4><i><b>Kyū:</b></i></h4>
        <p>Los kyū son los cinturones de los judocas principiantes.</p>
      </div>

      <div className="carousel-wrapper">
        <Carousel 
          interval={3000} 
          pause="hover"
          indicators={true}
          nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
          prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
        >
          {beltData.map((belt) => (
            <Carousel.Item key={belt.id}>
              <BeltCard {...belt} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BeltCarousel;