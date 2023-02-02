import * as types from "../actions/actionTypes";

const initTask: string[] = [];

const todos = (state = initTask, action: any) => {
  switch (action.type) {
    case types.ADD_TASK:
      return [
        ...state,
        {
          taskName: action.taskName,
          isCompleted: false,
        },
      ];
    default:
      return state;
  }
};

export default todos;
