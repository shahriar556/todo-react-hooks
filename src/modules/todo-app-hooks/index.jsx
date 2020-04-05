import React from 'react'
import TodoProvider from './context'
import Tags from './tags'
import List from './lists'
import Todos from './todos'

const TodoApp = () => {
    

    return (
        <TodoProvider>
            <div  style={{width:"70%",margin:"0 auto"}}>
                <h1 style={{textAlign: "center",borderBottom: "2px solid",paddingBottom: "10px"}}>Todo App</h1>
                <List/>
                <Todos/>
                <Tags/>
            </div>
            
        </TodoProvider>
        
    )
}

export default TodoApp;