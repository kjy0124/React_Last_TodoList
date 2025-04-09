import { useEffect, useState } from "react";
import generateId from "../assets/generateId";

const TodoInput = ({ todoList, setTodoList }) => {
  // console.log(...todoList);
  const [inputValue, setInputValue] = useState("");

  const inputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    // console.log(inputValue);
  }, [inputValue]);

  const btnClick = () => {
    let newArr = [
      ...todoList,
      { id: generateId(), todo: inputValue, isComplete: false },
    ];
    setTodoList(newArr);
    setInputValue("");
  };

  useEffect(() => {
    // console.log(todoList);
  }, [todoList]);

  return (
    <div>
      <input type="text" value={inputValue} onChange={inputOnChange} />
      <button onClick={btnClick}>등록</button>
    </div>
  );
};

export default TodoInput;
