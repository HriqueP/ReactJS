import React, { useState } from "react";

function UAS() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("food_input").value;
    document.getElementById("food_input").value = "";

    /*
    Fazer o método abaixo substitui o array inicial e exclui os outros elementos
    setFoods([newFood]) 
    */

    /*
    Um dos jeito para se adicionar mais uma comida no array é utilizar o srpread operator
    setFoods([...foods, newFood]);
    setFoods([...foods, newFood]); => setFoods(["Apple", "Orange", "Banana", newFood])
    */

    /*
    O mais correto é utilizar uma updater function, ja que não queremos trabalhar com o
    state ATUAL de uma variavel
    */
    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(foodIndex) {
    // element pode ser substituido por _, ou seja, esse paramentro é ignorado
    setFoods(foods.filter((_, index) => index !== foodIndex));
  }

  return (
    <div>
      <h2>Lista de Comida</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="food_input" placeholder="Adicione uma comida" />
      <button onClick={handleAddFood}>Adicionar</button>
    </div>
  );
}

export default UAS;
