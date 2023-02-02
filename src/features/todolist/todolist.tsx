import Container from "@mui/material/Container";
import TaskList from "./components/taskList";

const TodoList = () => {
  return (
    <Container>
      <div className="flex flex-col content-center">
        <div className="text-center">TodoList</div>
        <TaskList />
      </div>
    </Container>
  );
};
export default TodoList;
