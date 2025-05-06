import React, { useState, useEffect } from "react";
import styles from "../digital_clock/DigitalClock.module.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  // Começar o timer somente quando o componente mount
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // CleanUp function
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className={styles.clock_container}>
      <div className={styles.clock}>
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
