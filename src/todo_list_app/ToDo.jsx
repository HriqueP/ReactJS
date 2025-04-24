import React, { useState } from "react";
import styles from "../todo_list_app/ToDo.module.css";

function ToDo() {
  const [listItens, setListItens] = useState([]);

  function handleAddItem() {
    const item = document.getElementById("task_name").value;
    document.getElementById("task_name").value = "";

    setListItens((l) => [...l, item]);
  }

  function handleRemoveItem(itemIndex) {
    setListItens(listItens.filter((_, index) => index !== itemIndex));
  }

  return (
    <div>
      <h2>To-Do List</h2>
      <input type="text" id="task_name" />
      <button className={styles.add_button} onClick={handleAddItem}>
        Add Item
      </button>
      <ol className={styles.item_container}>
        {listItens.map((item, index) => (
          <li key={index} className={styles.list_item}>
            {item}
            <button
              className={styles.remove_button}
              onClick={() => handleRemoveItem(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDo;
