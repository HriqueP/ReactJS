import React, { useState, useEffect } from "react";
import styles from "../use_effect/UseEffect.module.css";

/*
UseEffect => Hook que fala para o DOM executar um código quando:
  1. Esse componente renderizar novamente
  2. Quando o componente for criado e addicionado ao DOM (mount)
  3. Quando o state de um valor for alterado

useEffect(function, [dependencies])

1. useEffect(() => {})           // Roda sempre que o componente renderizar novamente 
2. useEffect(() => {}, [])       // Roda apenas quando o componente mount
3. useEffect(() => {}, [value])  // Roda apenas quando o componente mount + quando o 'value' é alterado

** 
Nos casos acima a parte de 'function' está sendo representada por uma 
Arrow Function '() => {}', porem 'useEffect(myFunction)' tambem seria correto
**

USOS
#1 Event Listeners
#2 Manipulação de DOM
#3 Subscriptions (updates em tempo real)
#4 Fetch data de uma API
#5 Limpeza quando um componente é removido do DOM (unmount)

Mantem o código organizado
*/

function UseEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  /* 
  useEffect(() => {}) 

  Código ira rodar todas as vezes que o componente for renderizado

  useEffect(() => {
    document.title = `COUNT: ${count}`; // Utilização de template string => `texto`
  });
  */

  /*
  useEffect(() => {}, []) 

  Código ira rodar apenas quando o componente mount
  
  useEffect(() => {
    document.title = `COUNT: ${count}`; // Utilização de template string => `texto`
  }, []);
  */

  /*
  useEffect(() => {}, [value])

  Código ira rodar quando o componente mount e quando o value for alterado
  
  useEffect(() => {
    document.title = `COUNT: ${count}`; // Utilização de template string => `texto`
  }, [count]);
  */

  useEffect(() => {
    document.title = `COUNT: ${count} ${color}`; // Utilização de template string => `texto`

    // Retorna uma função de clean up quando o componente é removido do DOM ou se não tem dependencias
    return () => {
      // CLEAN UP CODE
    };
  }, [count, color]);

  function handleAddCount() {
    setCount((c) => c + 1);
  }

  function handleSubtractCount() {
    setCount((c) => c - 1);
  }

  function handleChangeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={handleAddCount}>Add</button>
      <button onClick={handleSubtractCount}>Subtract</button>
      <br />

      <button onClick={handleChangeColor}>Color</button>
    </>
  );
}

export default UseEffect;
