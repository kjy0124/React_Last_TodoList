import { useState } from "react";

const TodoList = ({ todoList, setTodoList, getFilteredList }) => {
  const [editingId, setEditingId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const toggleCheckbox = (id, checked) => {
    let newArr = todoList.map((item) => {
      if (id === item.id) {
        console.log("checked:", checked);
        console.log("isComplete:", item.isComplete);
        return { ...item, isComplete: checked };
      } else {
        return item;
      }
    });

    setTodoList(newArr);
    console.log(newArr);
  };

  //삭제 함수
  const handleDeleteButtonClick = (id) => {
    let newArr = todoList.filter((item) => item.id !== id);
    setTodoList(newArr);
    // console.log(newArr);
  };

  //수정 함수
  const handleEditButtonClick = (id, todo) => {
    if (editingId !== null) {
      // 수정한 내용을 저장하는 로직
      //저장을 하면 다시 editingId 값을 null
      let newArr = todoList.map((item) => {
        if (id === item.id) {
          return { ...item, todo: editInput };
        } else {
          return item;
        }
      });
      setTodoList(newArr);
      setEditingId(null);
    } else {
      // 수정 버튼을 클릭하지 않음
      // 버튼을 클릭한다면 editinputId에 Id를줘야함?
      setEditInput(todo);
      setEditingId(id);
    }
  };

  return (
    <div>
      {getFilteredList.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={(e) => toggleCheckbox(item.id, e.target.checked)}
          />
          {item.id === editingId ? (
            <input
              type="text"
              value={editInput}
              onChange={(e) => setEditInput(e.target.value)}
            />
          ) : (
            item.todo
          )}
          <div>
            <button onClick={() => handleEditButtonClick(item.id, item.todo)}>
              {item.id === editingId ? "✅" : "🔄"}
            </button>
            <button onClick={() => handleDeleteButtonClick(item.id)}>❎</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
