import Example1 from "@/features/example/example1";
import Example2 from "@/features/example/example2";
import ExampleChild from "@/features/example/exampleChild";
import { RouteObject } from "react-router-dom";

export const exampleRoutes: RouteObject[] = [
  {
    path: "/example1",
    element: <Example1 />,
    children: [
      {
        path: "child",
        element: <ExampleChild />,
      },
    ],
  },
  {
    path: "/example2",
    element: <Example2 />,
  },
];
