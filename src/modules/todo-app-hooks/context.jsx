import React, {createContext, useReducer} from 'react'

import reducer from './reducer'
import {tags,lists,todos} from './data'

let todoContext = null;
const {Provider, Consumer: TodoConsumer} = (todoContext = createContext());



const init = {
    lists: lists,
    todos: todos,
    tags: tags
}

const TodoProvider = ({children}) => {
    const [todoList, dispatch] = useReducer(reducer,init);

    return (
        <Provider value={{ ...todoList,dispatch }}>
            {children}
        </Provider>
    )
}

export {TodoConsumer, TodoProvider, todoContext};
export default TodoProvider;