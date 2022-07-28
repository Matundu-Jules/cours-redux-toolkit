import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux";

const TaskForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    // dispatch({
    //   type: "todo/addTask",
    //   payload: text,
    // })


    dispatch(addTask(text))

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TaskForm;
