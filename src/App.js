import { Provider } from "react-redux";
import { store } from "./redux";
import "./styles.css";
import TaskForm from "./TaskForm";
import TasksHeader from "./TasksHeader";
import TasksList from "./TasksList";

export default function App() {

  return (
    <Provider store={store}>
      <div className="container">
      <article>
        <TasksHeader />
        <TasksList />
        <footer>
          <TaskForm />
        </footer>
      </article>
    </div>
    </Provider>
  );
}
