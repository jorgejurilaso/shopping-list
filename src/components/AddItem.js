import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";

export default function Input() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInputChange = event => {
    return setInput(event.target.value);
  };

  const handleSubmit = () => {
    if(input){
      dispatch(actionCreators.addToList(input));
      setInput("");
    }
  };

  const handleClear = () => {
    dispatch(actionCreators.clearItems());
  };

  const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        dispatch(actionCreators.addToList(input));
      }
  }

  return (
    <div>
      <input
        className="input"
        placeholder="Add this to a list of shopping items"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <Button className="button" variant="outline-dark" onClick={handleSubmit}>
      Add to Shopping list
      </Button>
      <Button className="button" variant="outline-dark" onClick={handleClear}>
        Clear
      </Button>
    </div>
  );
}
