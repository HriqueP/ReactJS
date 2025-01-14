import ProfilePic from "../assets/DreamyDS.png";
import styles from "../simple_profile_card/Card.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <img
        className={styles.card_picture}
        src={ProfilePic}
        alt="Profile Picture"
      />
      <h2 className={styles.card_title}>DreamyDS</h2>
      <p className={styles.card_text}>
        My name is DreamyDS, I main Viktor and Arcane ruined my champion,
        also... season 15 fucking sucks!
      </p>
    </div>
  );
}

export default Card;
