import React, { useState } from "react";

function UpdaterFunction() {
  /* Funções de Update
  Normalmente são funções passadas como argumentos para o setState()
  Permitem updates seguros baseados no state anterior
  Usado com multiplos state updates e funções asincronas
  
  Usar funções de update é considerado boas práticas

  Ex: setYear(updater function) -> Normalmente uma arrow function
  */

  const [count, setCount] = useState(0);

  function increment() {
    /*
    Usa o state ATUAL para calcular o PROXIMO
    set functions não acionam um update
    PROXIMO state se torna o ATUAL quando acontecer um update
    
    Isso acontece
    setCount(count + 1);
    setCount(count + 1);
    UPDATE AQUI

    É como se isso acontesse
    setCount(0 + 1);
    setCount(0 + 1);
    */

    // Jeito correto
    /*
    Usa o state PENDENTE para calcular o PROXIMO state
    React coloca funções de update em queue
    No proximo render, ele as chama em ordem
    */
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }

  function decrement() {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
}

export default UpdaterFunction;
