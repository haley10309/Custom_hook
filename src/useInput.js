/* eslint-disable no-unused-vars */
import { useState } from "react";

export function useInput(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);
  const handleChange = (e) => {
    setInputValue(e.value.target);
  };
  return [inputValue, handleChange];
}
