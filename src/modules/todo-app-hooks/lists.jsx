import React, {useContext, useEffect} from 'react'
import { todoContext } from './context'
import { CREATE_LIST, UPDATE_LIST, DELETE_LIST } from './constants'

const Lists = () => {
    const {lists,dispatch} = useContext(todoContext);
    useEffect(() => {
        dispatch({type:CREATE_LIST, payload:{id:"1",name:"list1",upcoming:"upcoming1"}})
        dispatch({type:CREATE_LIST, payload:{id:"2",name:"list2",upcoming:"upcoming2"}})
        dispatch({type:CREATE_LIST, payload:{id:"3",name:"list3",upcoming:"upcoming3"}})
        dispatch({type:CREATE_LIST, payload:{id:"4",name:"list4",upcoming:"upcoming4"}})
    }, [])

    const updateHandler = id => {
        dispatch({type:UPDATE_LIST,payload:{id:id,name:"Todo List Updated",upcoming:"Upcoming Todo Updated"}})
    }

    const deleteHandler = id => {
        dispatch({type:DELETE_LIST,payload:{id:id}})
    }


    return (
        <div>
            <h1>All Lists</h1>
            <table width="100%" border="1" style={{textAlign: "center"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Upcoming</th>
                        <th>Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {lists.map((val,index) => <tr key={index}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.upcoming}</td>
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

export default Lists;