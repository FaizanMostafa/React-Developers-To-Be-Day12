import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Todo from "./Pages/Todo";

export default function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}
