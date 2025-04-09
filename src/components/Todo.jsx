import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Filter from "./Filter";

const Todo = () => {
  const [todoList, setTodoList] = useState([
    { id: 0, todo: "밥먹기", isComplete: false },
    { id: 1, todo: "공부하기", isComplete: false },
    { id: 2, todo: "청소하기", isComplete: false },
  ]);

  const [selectedFilterId, setSelectedFilterId] = useState(0);

  const getFilteredList = () => {
    return todoList.filter((item) => {
      if (selectedFilterId === 2) {
        return item.isComplete;
      } else if (selectedFilterId === 1) {
        return !item.isComplete;
      } else {
        return true;
      }
    });
  };

  return (
    <div>
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
      <Filter
        selectedFilterId={selectedFilterId}
        setSelectedFilterId={setSelectedFilterId}
        getFilteredList={getFilteredList}
      />
      <TodoList
        todoList={todoList}
        getFilteredList={getFilteredList()}
        setTodoList={setTodoList}
      />
    </div>
  );
};

export default Todo;
