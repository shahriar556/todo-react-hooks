import {
    CREATE_LIST,
    UPDATE_LIST,
    DELETE_LIST,
    CREATE_TOTO,
    UPDATE_TODO,
    DELETE_TODO,
    CREATE_TAG,
    UPDATE_TAG,
    DELETE_TAG
} from './constants';
import {tags} from './data'

const reducer = (state, action) => {
    switch (action.type){
        case CREATE_LIST: {
            const {lists} = state;
            lists.push(action.payload);
            return {
                ...state,
                lists
            }
        }
        case UPDATE_LIST: {
            const {lists} = state;
            const list = lists.find(ls => ls.id === action.payload.id);
            list.name = action.payload.name || list.name;
            list.upcoming = action.payload.upcoming || list.upcoming
            return {
                ...state,
                lists
            }
        }
        case DELETE_LIST: {
            const lists = state.lists.filter(list => list.id !== action.payload.id);
            return {
                ...state,
                lists
            }
        }
        case CREATE_TOTO: {
            const {todos} = state;
            todos.push(action.payload);
            return {
                ...state,
                todos
            }
        }
        case UPDATE_TODO: {
            const {todos} = state;
            const todo = todos.find(td => td.id === action.payload.id);
            todo.task = action.payload.task || todo.task;
            todo.notes = action.payload.notes || todo.notes
            return {
                ...state,
                todos
            }
        }
        case DELETE_TODO: {
            const todos = state.todos.filter(todo => todo.id !== action.payload.id);
            return {
                ...state,
                todos
            }
        }
        case CREATE_TAG: {
            const {tags} = state;
            tags.push(action.payload);
            // tags.push(action.payload)
            return {
                ...state,
                tags
            }
            
        }
        case UPDATE_TAG: {
            const {tags} = state;
            const tag = tags.find(tg => tg.id === action.payload.id);
            tag.name = action.payload.name || tag.name
            tag.color = action.payload.color || tag.color
            return {
                ...state,
                tags
            }
        }
        case DELETE_TAG: {
            const tags = state.tags.filter(tag => tag.id !== action.payload.id);
            // const todos = state.todos.map(todo => {
            //     const index = todo.tags.findIndex(tag = tag === action.payload)
            //     if(index !=== -1){
            //         todo.tags.splice(index,1);
            //     }
            //     return todo;
            // });
            return {
                ...state,
                // todos,
                tags
            }
        }
        default: 
            return state;
    }
}

export default reducer;