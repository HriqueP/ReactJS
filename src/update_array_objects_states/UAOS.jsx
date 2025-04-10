import React, { useState } from "react";

function UAOS() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear()); // Pega a data do ano atual
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };

    // Usar a função de update para addicionar o novo carro no array
    setCars((c) => [...c, newCar]);

    // Reset nos campos
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(carIndex) {
    setCars(cars.filter((_, index) => index !== carIndex));
  }

  function handleYearChange(event) {
    setCarYear(event.target.value);
  }

  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }

  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((element, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {element.year} {element.make} {element.model}
          </li>
        ))}
      </ul>
      <input
        type="number"
        value={carYear}
        onChange={(event) => handleYearChange(event)}
      />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={(event) => handleMakeChange(event)}
        placeholder="Enter car make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={(event) => handleModelChange(event)}
        placeholder="Enter car model"
      />
      <br />
      <button onClick={() => handleAddCar()}>Add Car</button>
    </div>
  );
}

export default UAOS;
