/*
sseContext() = É um react hook que permite compartilhar valores entre multiplos
               niveis de componentes sem ter q passar props para esses niveis
 
* niveis = relação de pai e filho entre componentes

Para passar o user do component A para o D teriamos que usar as props, sendo assim, por cada nivel
que iriamos passar, teriamos que passar mais e mais props, até chegar no nivel desejado, isso
fica conhecido como 'prop drilling'

PROVIDER COMPONENT ==> Component que tem o dado que queremos ter acesso
1. import { createContext } from 'react';
2. export const MyContext = createContext();
3. <MyContext.Provider value={value}
      <Child />
   </MyContext.Provider>


CONSUMER COMPONENTS ==> Component que vai acessar esses dados passados, pode haver mais que um
1. import React, { useContext } from 'react'
   import { MyContext } from './ComponentA'
2. const value = useContext(MyContext)
*/

import React, { useState, createContext } from "react";
import styles from "../use_context/Components.module.css";
import ComponentB from "./ComponentB.jsx";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Poletti");

  return (
    <div className={styles.box}>
      <h1>Component A</h1>
      <h2>{`Olá ${user} `}</h2>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
