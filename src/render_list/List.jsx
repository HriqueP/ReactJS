import PropTypes from "prop-types";
import styles from "../render_list/List.module.css";

function List(props) {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "orange", calories: 45 },
    { id: 4, name: "pinaple", calories: 120 },
    { id: 5, name: "coconut", calories: 37 },
  ];

  /*
  ORDENAÇÃO DO ARRAY LISTA

  1. Ordena o array de strings comum em ordem crescente
  fruits.sort(); Orderar o array, porêm funciona apenas com strings

  2. Ordena o array de objetos em ordem alfabetica dos names (crescente)
  fruits.sort((a, b) => a.name.localeCompare(b.name));

  3. Ordena o array de objetos em ordem alfabetica dos names (decrescente)
  fruits.sort((a, b) => b.name.localeCompare(a.name));

  4. Ordena o array de objetos em ordem crescente usando o paramêtro de calorias
  fruits.sort((a, b) => a.calories - b.calories);

  5. Ordena o array de objetos em ordem decrescente usando o paramêtro de calorias
  fruits.sort((a, b) => b.calories - a.calories);
  */

  /*
  FILTRAS OBJETOS COM BASE EM CRITERIOS DEFINIDOS

  1. Criar uma array que filtra com base no valor das calorias (menor que 100)
  const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  2. Criar uma array que filtra com base no valor das calorias (maior que 100)
  const lowCalFruits = fruits.filter((fruit) => fruit.calories >= 100);
  */

  /*
  MAPEAR A LISTA PARA O DISPLAY NA PAGINA (items apos o mapeamento)
  const listItems = list.map((item) => (
    <li key={item.id}> {item.name}</b></li>
  ));
  */

  /*
  TRANSFORMAR O COMPONENTE PARA SER REUTILIZAVEL COM OUTRAS LISTAS

  1. No arquivo App.jsx (pai) definir a lista e no retorno do componente passar a prop 
  de items={lista} e a prop de category="categoriaDaLista"

  2. No arquivo List.jsx (filho) fazer a importação das props e colorcar o metodo map
  com a referencia para a constante com os items importados pela props 
  
  const itemList = props.items
  
  const listItems = props.items.map((item) => (
    <li key={item.id}> {item.name}</b></li>
  ));

  3. Para color a categoria basta, pelo importe das props colocar uma constante com 
  a valor da prop de category que foi passado
  const itemCategory = props.category

  4. Para rendereziar somente lista que tenham itens podemos utilizar a renderização 
  condicional
  {list.length > 0 ? <List /> : null}
  OU
  {list.length > 0 && <List />}
  */

  const itemList = props.items;
  const itemCategory = props.category;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: {item.value}
    </li>
  ));

  return (
    <div className={styles.container_list}>
      <h3 className={styles.list_category}>{itemCategory}</h3>
      <ol className={styles.list_item}>{listItems}</ol>
      <hr />
    </div>
  );
}

// Checar se as props tem os tipos corretos
List.proptypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape(
      { id: PropTypes.number },
      { name: PropTypes.string },
      { value: PropTypes.number }
    )
  ),
  category: PropTypes.string,
};

// Props default, para quando o valor não é passado no componente
List.defaultProps = {
  item: [],
  category: "None",
};

export default List;
