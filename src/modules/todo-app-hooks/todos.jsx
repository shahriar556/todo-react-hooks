import React, { useContext, useEffect } from "react";
import {todoContext} from './context'
import { CREATE_TOTO,UPDATE_TODO,DELETE_TODO } from './constants'

const Todos = () => {
    const {todos,dispatch} = useContext(todoContext);
    useEffect(() => {
        dispatch({type:CREATE_TOTO,payload:{id:"1",task:"Task1",notes:"Notes1"}})
        dispatch({type:CREATE_TOTO,payload:{id:"2",task:"Task2",notes:"Notes2"}})
        dispatch({type:CREATE_TOTO,payload:{id:"3",task:"Task3",notes:"Notes3"}})
        dispatch({type:CREATE_TOTO,payload:{id:"4",task:"Task4",notes:"Notes4"}})
        dispatch({type:CREATE_TOTO,payload:{id:"5",task:"Task5",notes:"Notes5"}})
    },[]);

    const updateHandler = id => {
        dispatch({type:UPDATE_TODO,payload:{id:id,task:"Task Updated",notes:"Notes Updated"}})
    }
    const deleteHandler = id => {
        dispatch({type:DELETE_TODO,payload:{id:id}})
    }

    return (
        <div>
            <h1>All Todos</h1>
            <table width="100%" border="1" style={{textAlign: "center"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Task</th>
                        <th>Notes</th>
                        <th>Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((val,index) => <tr key={index}>
                        <td>{val.id}</td>
                        <td>{val.task}</td>
                        <td>{val.notes}</td>
                        <td>
                            <button onClick={() => updateHandler(val.id)}>Update</button>
                            <button onClick={() => deleteHandler(val.id)}>Delete</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Todos;