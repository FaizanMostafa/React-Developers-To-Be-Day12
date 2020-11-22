import {
  ADD_TODO,
  DELETE_TODO,
  MARK_COMPLETED,
  MARK_IN_PROGRESS
} from "../Constants";

const addTodo = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TODO,
      payload: data
    });
  };
};

const deleteTodo = (data) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_TODO,
      payload: data
    });
  };
};

const markTodoAsCompleted = (data) => {
  return (dispatch) => {
    dispatch({
      type: MARK_COMPLETED,
      payload: data
    });
  };
};

const markTodoAsInProgress = (data) => {
  return (dispatch) => {
    dispatch({
      type: MARK_IN_PROGRESS,
      payload: data
    });
  };
};

export {
  addTodo,
  deleteTodo,
  markTodoAsCompleted,
  markTodoAsInProgress
};
