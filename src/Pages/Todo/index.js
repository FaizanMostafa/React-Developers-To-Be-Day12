import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodo,
  deleteTodo,
  markTodoAsCompleted,
  markTodoAsInProgress
} from "../../Redux/Actions/todoActions";

const Todo = (props) => {
  const [todoMessage, setTodoMessage] = useState("");

  const handleAddTodo = () => {
    let todo = {
      id: props.todos.length + 1,
      message: todoMessage,
      status: "Pending"
    };
    props.addTodo(todo);
    setTodoMessage("");
  };

  const handleDeleteTodo = (id) => {
    props.deleteTodo({ id });
  };

  const handleMarkTodoAsComplete = (id) => {
    props.markTodoAsCompleted({ id });
  };

  const handleMarkTodoAsInProgress = (id) => {
    props.markTodoAsInProgress({ id });
  };

  return (
    <div>
      <input
        value={todoMessage}
        onChange={(e) => setTodoMessage(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {props.todos.length > 0 &&
        props.todos.map((todo) => (
          <>
            <br />
            <span>
              <b>Todo:</b> {todo.message} <b>Status:</b>
              {todo.status}{" "}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            <button onClick={() => handleMarkTodoAsComplete(todo.id)}>
              Mark Complete
            </button>
            <button onClick={() => handleMarkTodoAsInProgress(todo.id)}>
              Mark In Progress
            </button>
          </>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todos,
    todoStatus: state.todoReducer.todoStatus
  };
};

export default connect(mapStateToProps, {
  addTodo,
  deleteTodo,
  markTodoAsCompleted,
  markTodoAsInProgress
})(Todo);
