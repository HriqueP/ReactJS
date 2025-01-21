import List from "./render_list/List.jsx";

function App() {
  const fruits = [
    { id: 1, name: "apple", value: 95 },
    { id: 2, name: "banana", value: 105 },
    { id: 3, name: "orange", value: 45 },
    { id: 4, name: "pinaple", value: 120 },
    { id: 5, name: "coconut", value: 37 },
  ];

  const cars = [
    { id: 1, name: "BMW", value: 200000 },
    { id: 2, name: "Ferrari", value: 500000 },
    { id: 3, name: "Porsch", value: 320000 },
    { id: 4, name: "Jaguar", value: 120000 },
    { id: 5, name: "Audi", value: 90000 },
  ];

  return (
    <>
      <List items={fruits} category="Fruits" />
      <List items={cars} category="Cars" />
    </>
  );
}

export default App;
