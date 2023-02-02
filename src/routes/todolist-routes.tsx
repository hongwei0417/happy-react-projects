import TodoList from "@/features/todolist/todolist";
import { RouteObject } from "react-router-dom";

export const todolistRoutes: RouteObject[] = [
  {
    path: "/todolist",
    element: <TodoList />,
  },
];
