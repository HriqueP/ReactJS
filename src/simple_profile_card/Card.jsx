import ProfilePic from "../assets/DreamyDS.png";
import "../simple_profile_card/Card.css";

function Card() {
  return (
    <div className="card">
      <img className="card-picture" src={ProfilePic} alt="Profile Picture" />
      <h2 className="card-title">DreamyDS</h2>
      <p className="card-text">
        My name is DreamyDS, I main Viktor and Arcane ruined my champion,
        also... season 15 fucking sucks!
      </p>
    </div>
  );
}

export default Card;
