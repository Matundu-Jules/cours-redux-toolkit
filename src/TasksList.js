import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";


const TasksList = () => {
  const tasks = useSelector((state) => {
    console.log(state);
    return state.todo;
  })


  return (
    <>
      {tasks.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
        />
      ))}
    </>
  );
};

export default TasksList;
