import React, { useState } from "react";

function OnChangeComp() {
  const [name, setName] = useState("Empty");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Entregar");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleShiipingChange = (event) => {
    setShipping(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => handleNameChange(event)}
      />
      <p>Hi: {name}</p>
      <hr />

      <input
        type="number"
        value={quantity}
        onChange={(event) => handleQuantityChange(event)}
      />
      <p>{quantity}</p>
      <hr />

      <textarea
        name="my_text_area"
        id="my_text_area"
        value={comment}
        onChange={(event) => handleCommentChange(event)}
        placeholder="Instruções de Entrega"
      ></textarea>
      <p>{comment}</p>
      <hr />

      <select
        name="my_select_option"
        id="my_select_option"
        value={payment}
        onChange={(event) => handlePaymentChange(event)}
      >
        <option value="">Selecione um Opção</option>
        <option value="PIX">PIX</option>
        <option value="Credit">Credit</option>
        <option value="Debit">Debit</option>
      </select>
      <p>{payment}</p>
      <hr />

      <label>
        <input
          type="radio"
          value="Buscar"
          checked={shipping === "Buscar"}
          onChange={(event) => handleShiipingChange(event)}
        />
        Buscar
      </label>
      <label>
        <input
          type="radio"
          value="Entregar"
          checked={shipping === "Entregar"}
          onChange={(event) => handleShiipingChange(event)}
        />
        Entrega
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default OnChangeComp;
