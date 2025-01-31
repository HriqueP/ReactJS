import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [bool, setBool] = useState(false);

  const updateName = () => {
    setName("Poletti");
  };

  const updateAge = () => {
    setAge(age + 1);
  };

  const updateBool = () => {
    setBool(!bool);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={() => updateName()}>Set Name</button>
      <hr />
      <p>Age: {age}</p>
      <button onClick={() => updateAge()}>Increment Age</button>
      <hr />
      <p>Bool: {bool ? "Yes" : "No"}</p>
      <button onClick={() => updateBool()}>Change Bool</button>
    </div>
  );
}

export default MyComponent;
