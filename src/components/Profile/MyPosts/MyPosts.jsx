import React from "react";
import m from "../MyPosts/MyPosts.module.css";
import Post from "./Posts/Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "./../../../Redux/State";


export default function MyPosts(props) {
    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    const newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator);
    };

    let onPostChange = () => {
        const text = newPostElement.current.value;
        const action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    };

    return (
        <div className={ m.postsBlock }>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={ newPostElement }
                              value={ props.newText }
                              onChange={ onPostChange } />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
                {postsElements}
            </div>
        </div>

    )
}

