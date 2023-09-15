import { createContext } from "react";
import {useProviderPosts} from "../hooks";

const initialState = {
    post: [],
    loading: true,
};

export const PostsContext = createContext(initialState);

export const PostsProvider = ({children}) => {
    const posts = useProviderPosts();
    
    return <PostsContext.Provider value={posts}> {children} </PostsContext.Provider>
}