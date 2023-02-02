import * as types from "./actionTypes";

// action creator
export function addTask(taskName: any) {
  return {
    type: types.ADD_TASK,
    taskName,
  };
}

export function deleteTask(idx: any) {
  return {
    type: types.DELETE_TASK,
    idx,
  };
}

export function toggleTask(idx: any) {
  return {
    type: types.TOGGLE_TASK,
    idx,
  };
}
