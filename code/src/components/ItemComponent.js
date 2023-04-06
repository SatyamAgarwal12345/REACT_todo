import React from "react";
import '../Card.css'

const ItemComponent = (props) => {
  return (
    <div>
      <li>
        {props.item}
        <button className="button" onClick={() => props.del(props.ind)}>delete</button>
      </li>
    </div>
  );
};

export default ItemComponent;
