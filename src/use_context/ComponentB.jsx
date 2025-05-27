import React from "react";
import styles from "../use_context/Components.module.css";
import ComponentC from "./ComponentC";

function ComponentB() {
  return (
    <div className={styles.box}>
      <h1>Component B</h1>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
