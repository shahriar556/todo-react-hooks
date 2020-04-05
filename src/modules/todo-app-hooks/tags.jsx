import React , {useContext,useEffect} from 'react'
import { todoContext } from './context'
import { CREATE_TAG, DELETE_TAG, UPDATE_TAG} from './constants'
// import {tags} from './data'

const Tags = () => {
    const {tags,dispatch} = useContext(todoContext);
    useEffect(() => {
        dispatch({type:CREATE_TAG, payload: {id:"1",name:"Important2",color:"#de1919"}})
        dispatch({type:CREATE_TAG, payload: {id:"2",name:"Important3",color:"#fb3f3f"}})
        dispatch({type:CREATE_TAG, payload: {id:"3",name:"Important4",color:"#fb5f5f"}})
        dispatch({type:CREATE_TAG, payload: {id:"4",name:"Important5",color:"#c55858"}})
        dispatch({type:CREATE_TAG, payload: {id:"5",name:"Important6",color:"#ee6363"}})
        dispatch({type:CREATE_TAG, payload: {id:"6",name:"Important7",color:"#ea7474"}})
        dispatch({type:CREATE_TAG, payload: {id:"7",name:"Important8",color:"#f48686"}})
        dispatch({type:CREATE_TAG, payload: {id:"8",name:"Important9",color:"#ac7e7e"}})
        dispatch({type:CREATE_TAG, payload: {id:"9",name:"Important10",color:"#f2b2b2"}})
        dispatch({type:CREATE_TAG, payload: {id:"10",name:"Important11",color:"#f9c5c5"}})
        dispatch({type:CREATE_TAG, payload: {id:"11",name:"Important12",color:"#ffdbdb"}})
    },[]);
    const deleteHandler = id => {
        dispatch({type:DELETE_TAG,payload: {id:id}});
    }
    
    const updateHandler = id => {
        dispatch({type: UPDATE_TAG, payload:{id:id,name:"Upcoming",color:"yellow"}})
    }

    return (
        <div>
            <h1>All Tags</h1>
            <table width="100%" border="1" style={{textAlign: "center"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Color Code</th>
                        <th>Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {tags.map((val,index) => <tr style={{backgroundColor:val.color}} key={index}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.color}</td>
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

export default Tags;