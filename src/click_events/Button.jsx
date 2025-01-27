import styles from "../click_events/Button.module.css";

function Button() {
  // const com uma arrow function
  const handleClick = () => {
    console.log("Pressed");
  };

  //  const com uma arrow function que recebe um parâmetro
  const handleClick2 = (name) => {
    console.log(`${name} clicked the button`);
  };

  // function que é chamada toda vez que o botão é clicado
  let count = 0;
  const countFunction = () => {
    if (count < 5) {
      count += 1;
      console.log(`Only ${count} times, more!`);
    } else {
      count += 1;
      console.log(`Already ${count} times, thats enough`);
    }
  };

  //  parâmetro 'event' é passado automaticamente, é um obj que descreve o evento ocorrido
  const handleEvent = (event) => {
    console.log(event);
    event.target.textContent = "You Clicked Me!";
  };

  // function que cuida do duble click no botão
  const handleDubleClick = (event) => {
    event.target.style.backgroundColor = "red";
  };

  return (
    <button
      // onClick={(event) => handleEvent(event)}
      onDoubleClick={(event) => handleDubleClick(event)}
    >
      Click Me!
    </button>
  );
}

export default Button;
