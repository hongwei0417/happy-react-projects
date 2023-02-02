import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "@/reducers/layout";
import todosReducer from "./features/todolist/reducers";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    todos: todosReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
