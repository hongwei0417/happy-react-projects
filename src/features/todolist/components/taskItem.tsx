import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import Container from "@mui/material/Container";
import React from "react";
import { CheckBox } from "@mui/icons-material";

const TaskItem = (props: any) => {
  return (
    <Container>
      <CheckBox />
      {props.task.taskName}
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Container>
  );
};
export default TaskItem;
