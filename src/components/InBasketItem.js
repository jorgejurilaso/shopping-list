import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";
import { Button } from "react-bootstrap";

export default function InBasketItem({ item, index }) {
  const dispatch = useDispatch();

  const removeItemFromList = index => {
    dispatch(actionCreators.removeItem(index));
  };

  return (
    <ListGroup.Item
      key={index}
      variant="success"
      onClick={() => removeItemFromList(index)}
    >
      {item.value}
      <Button className="button" variant="outline-dark" onClick={removeItemFromList}>
        delete
      </Button>
    </ListGroup.Item>
  );
}
