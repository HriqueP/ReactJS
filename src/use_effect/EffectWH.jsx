import React, { useState, useEffect } from "react";
import styles from "../use_effect/UseEffect.module.css";

function EffectWH() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  /*
  Sem uso de useEffect()

  Somente um Event Listener é necessário, porem sempre que o componente é 
  renderizado, um Event Listener é adicionado 

  window.addEventListener("resize", handleResize);
  */

  /*
  Com uso de useEffect()

  Apenas quando o componente mount (quando é adicionado ao DOM) vamos adicionar 
  UM Event Listener
  */

  // Apenas UM Event Listerner vai ser adicionado, apenas quando o componente mount
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Fazer o clean up se não tiver dependencias ou quando o componente unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Possivel ter mais de um useEffect no mesmo componente
  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
}

export default EffectWH;
