import React, { useState } from "react";
import styles from "../use_state/Counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const minusCount = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.counter_container}>
      <p>Counter Programan</p>
      <p className={styles.current_number}>{count}</p>
      <div className={styles.buttons_container}>
        <button onClick={() => plusCount()} className={styles.action_buttons}>
          +
        </button>
        <button onClick={() => resetCount()} className={styles.action_buttons}>
          RESET
        </button>
        <button onClick={() => minusCount()} className={styles.action_buttons}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
