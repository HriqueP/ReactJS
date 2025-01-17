import PropTypes from "prop-types";
import styles from "../conditional_rendering/UserGreeting.module.css";

function UserGreeting(props) {
  //A lógica com if e else tambem seria possivel, dando o mesmo resultado
  return props.isLoggedIn ? (
    <div className={styles.welcome_message}>
      <p>Welcome {props.username}</p>
    </div>
  ) : (
    <div className={styles.error_message}>
      <p>Error, please Log-In to continue !</p>
    </div>
  );
}

/*
Color os componente de welcome_message e error_message em uma constante e fazer a renderização 
colocando as constantes como 'resultados' gera o mesmo resultado 

const welcomeMessage = <div className={styles.welcome_message}>
                          <p>Welcome {props.username}</p>
                        </div>

const errorMessage = <div className={styles.error_message}>
                        <p>Error, please Log-In to continue !</p>
                      </div>

return props.isLoggedIn ? ( welcomeMessage ) : ( errorMessage )
*/

// Checar se as props tem os tipos corretos
UserGreeting.proptypes = {
  username: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};

// Props default, para quando o valor não é passado no componente
UserGreeting.defaultProps = {
  username: "Guest",
  isLoggedIn: false,
};

export default UserGreeting;
