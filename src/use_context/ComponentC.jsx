import React, { useContext } from "react";
import { UserContext } from "./ComponentA";
import styles from "../use_context/Components.module.css";
import ComponentD from "./ComponentD";

function ComponentC() {
  const user = useContext(UserContext);

  return (
    <div className={styles.box}>
      <h1>Component C</h1>
      <h2>{`Ainda aqui ${user} ?`}</h2>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
