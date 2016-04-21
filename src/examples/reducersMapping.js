import { createReducersMap, composeReducer } from '../';

export const addTodo = ( { todo }, state ) => {
    if ( todo ) {
        const { todos: currentTodos } = state;
        return { todos: currentTodos.concat(todo) };
    }
};

export const removeTodo = ( { todo }, state ) => {
    const { todos: currentTodos } = state;
    if ( todo ) {
        const idx = currentTodos.indexOf(todo);
        return { todos: [ ...currentTodos.slice(idx), ...currentTodos.slice(idx + 1) ] };
    }
};

const mapping = createReducersMap([addTodo, removeTodo]);

export default composeReducer(mapping);
