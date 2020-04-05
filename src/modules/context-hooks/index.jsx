import React , {useContext} from 'react'
import PostProvider,{postContext} from './post-context'

const Demo = () => {
    const {posts} = useContext(postContext);
    
    return (
        <div>
            <h1>All Posts</h1>
            {/* {posts.length <= 0 && <h1>Loading...</h1>} */}
            <h1 className={posts.length > 0 && "hideLoading"}>Loading...</h1>
            <ul className={posts.length > 0 ? "showPost" : "hidePost"}>
                {posts.map((val,index) => <li key={index}>{val.title}</li>)}
            </ul>
        </div>
    )
}

const ContextHooks = () => {
    return (
        <PostProvider>
            <div className="cont">
                <h2>Context Hooks Demo</h2>
                <Demo />
            </div>
        </PostProvider>
    )
}

export default ContextHooks;