redux-reducer-delegate
======================

A way to create reducers by composing sub-reducers. This prevent the switch statements.


#Installation

```javascript

    npm install redux-reducer-delegate

```

#Usage

```javascript

import { createReducersMap, composeReducer } from '../';

/**
 * Note here that you will only return the current state that you would like to replace
 * which is the same how react's setState works. The main reducer that is called by
 * redux will be the one that will merge this state on the current state
 *
 */
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

/**
 * Create a mapping for the type to handlers
 */
const mapping = createReducersMap([addTodo, removeTodo]);

/**
 * Finally compose the reducer
 */
export default composeReducer(mapping);


```

#Test

npm run test
