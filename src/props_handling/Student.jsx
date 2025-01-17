import PropTypes from "prop-types";
import styles from "../props_handling/Student.module.css";

function Student(props) {
  return (
    <div className={styles.student_card}>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

// Checar se as props tem os tipos corretos
Student.proptypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

// Props default, para quando o valor não é passado no componente
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Student;
