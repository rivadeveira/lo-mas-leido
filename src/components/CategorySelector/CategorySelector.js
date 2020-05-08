import React from "react";
import "./CategorySelector.css";

export default function CategorySelector(props) {
  const itemsMrkp = props.items.map((item) => (
    <option key={`cat-${item}`} value={item}>
      {item}
    </option>
  ));
  return (
    <fieldset>
      <legend>Seleccione una categoria:</legend>
      <select className="category-selector" onChange={props.onChange}>
        {itemsMrkp}
      </select>
    </fieldset>
  );
}
