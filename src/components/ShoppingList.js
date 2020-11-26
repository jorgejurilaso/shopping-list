import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { InBasketItem } from ".";

export default function ShoppingList() {
  const items = useSelector(state => state.items);

  return (
    <ListGroup>

      {items.map((item, index) => {
        return <InBasketItem item={item} index={index} key={index} />
      })}

    </ListGroup>
  );


}