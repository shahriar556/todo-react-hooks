import React , {createContext, useState,useEffect} from 'react'
import Axios from 'axios'

let postContext = null;

const {Consumer: PostConsumer,Provider} = (postContext = createContext())

const URL = 'https://jsonplaceholder.typicode.com/posts';

const PostProvider = ({children}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        Axios.get(URL).then(({data}) => setPosts(data.slice(0,10))).catch(e => console.log(e))
    },[])

    return (
        <Provider value={{posts}}>
            {children}
        </Provider>

    )
}

export {PostConsumer,postContext, PostProvider};
export default PostProvider;