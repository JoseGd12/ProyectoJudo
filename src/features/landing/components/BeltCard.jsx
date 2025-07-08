

const BeltCard = ({ level, color, meaning, image, bgColor, textColor, borderColor }) => {
  return (
    <div className="belt-card-wrapper">
      <div 
        className="belt-card"
        style={{ 
          backgroundColor: bgColor,
          borderColor: borderColor
        }}
      >
        <div className="belt-image-container">
          <img 
            src={image} 
            alt={`Cinturón ${color}`} 
            className="belt-image"
          />
        </div>
        <div className="belt-info" >
          <h5 className="belt-level" style={{ 
          color: textColor
        }}>{level}</h5>
          <h4 className="belt-title" style={{ 
          color: textColor
        }}>Cinturón {color}</h4>
          <p className="belt-meaning" style={{ 
          color: textColor
        }}>{meaning}</p>
        </div>
      </div>
    </div>
  );
};

export default BeltCard;