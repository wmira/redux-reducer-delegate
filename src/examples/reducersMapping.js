import { createReducersMap, createReducerDelegate } from '../';

export const addTodo = ( state, { todo } ) => {
    if ( todo ) {
        const { todos: currentTodos } = state;
        return { todos: currentTodos.concat(todo) };
    }
};

export const removeTodo = ( state, { todo } ) => {
    const { todos: currentTodos } = state;
    if ( todo ) {
        const idx = currentTodos.indexOf(todo);
        return { todos: [ ...currentTodos.slice(idx), ...currentTodos.slice(idx + 1) ] };
    }
};

const mapping = createReducersMap([addTodo, removeTodo]);

export default createReducerDelegate(mapping);
