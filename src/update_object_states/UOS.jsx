import React, { useState } from "react";

function UOS() {
  const [car, setCar] = useState({
    year: 2025,
    make: "Ford",
    model: "Mustang",
  });

  function handleYearChange(event) {
    /*
    O método abaixo altera o ano de fabricação do objeto, porem muda o objeto completamente, ou seja,
    as outras propriedades como 'make' e 'model' do objeto não vão mais existir
    
    setCar({year: 2020})
    */
    /*
    Um dos jeito jeito correto é utilizar o Spread Operator (...object, prop: newValue), porem
    isso modifica o state ATUAL de car, o que não queremos, o que queremos é fazer uma referencia 
    ao state ANTERIOR 

    setCar({ ...car, year: event.target.value });
    setCar({...car, year: 2020}) => setCar({year: 2025, make: "Ford", model: "Mustang", year: 2020})
    */

    /*
    O jeito mais correto é utilizar updater functions para alterar states, já que é o modo mais 
    seguro de se fazer
    */
    setCar((c) => ({ ...c, year: event.target.value }));
  }

  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }

  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  return (
    <div>
      <p>
        Favorite Car: {car.make} {car.model} {car.year}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  );
}

export default UOS;
