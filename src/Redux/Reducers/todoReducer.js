import {
  ADD_TODO,
  DELETE_TODO,
  MARK_COMPLETED,
  MARK_IN_PROGRESS
} from "../Constants";

const initialState = {
  todos: [],
  todoStatus: new Date()
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      let updatedTodos = state.todos;
      updatedTodos.push(action.payload);
      return {
        ...state,
        todos: updatedTodos,
        todoStatus: new Date()
      };
    }

    case DELETE_TODO: {
      let updatedTodos = state.todos.filter(
        (todo) => todo.id != action.payload.id
      );
      return {
        ...state,
        todos: updatedTodos,
        todoStatus: new Date()
      };
    }

    case MARK_COMPLETED: {
      let updatedTodos = [];
      state.todos.forEach((todo) => {
        if (todo.id == action.payload.id) {
          todo.status = "Completed";
        }
        updatedTodos.push(todo);
      });
      return {
        ...state,
        todos: updatedTodos,
        todoStatus: new Date()
      };
    }

    case MARK_IN_PROGRESS: {
      let updatedTodos = [];
      state.todos.forEach((todo) => {
        if (todo.id == action.payload.id) {
          todo.status = "In Progress";
        }
        updatedTodos.push(todo);
      });
      return {
        ...state,
        todos: updatedTodos,
        todoStatus: new Date()
      };
    }

    case MARK_IN_PROGRESS: {
    }

    default:
      return state;
  }
}
