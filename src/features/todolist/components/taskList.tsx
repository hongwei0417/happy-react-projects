import TextField from "@mui/material/TextField";
import FilterList from "./filterList";
import TaskItem from "./taskItem";
import addIcon from "../../../assets/addIcon.png";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import * as actions from "../actions/todos";

const TaskList = () => {
  const tasks = useSelector((store: any) => store.todos);
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState("");

  const handleChange = (event: any) => {
    setNewTask(event.target.value);
  };
  const handleClick = () => {
    if (newTask === "") return;
    dispatch(actions.addTask(newTask));
    setNewTask("");
  };

  const renderItems = () => {
    let list: any = [];
    tasks.todos.map((item: any, index: any) => {
      list.push(
        <TaskItem key={item.taskName} task={{ ...item, idx: index }} />
      );
    });
    return list;
  };

  return (
    <div>
      <div className="flex w-full justify-center content-center mb-5">
        <TextField
          id="standard-basic"
          label="Add new task ..."
          variant="standard"
          value={newTask}
          onChange={handleChange}
          fullWidth
        />
        <button onClick={() => handleClick()}>
          <img src={addIcon} />
        </button>
      </div>
      <div>
        <FilterList />
        <div className="border border-double p-4">{renderItems()}</div>
      </div>
    </div>
  );
};
export default TaskList;
