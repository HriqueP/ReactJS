import React, { useContext } from "react";
import { UserContext } from "./ComponentA.jsx";
import styles from "../use_context/Components.module.css";

function ComponentD() {
  const user = useContext(UserContext);

  return (
    <div className={styles.box}>
      <h1>Component D</h1>
      <h2>{`Falou ${user}`}</h2>
    </div>
  );
}

export default ComponentD;
