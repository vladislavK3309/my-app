import React from "react";
import m from "../MyPosts/MyPosts.module.css";
import Post from "./Posts/Posts";


export default function MyPosts(props) {
    debugger;
    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    const newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div className={ m.postsBlock }>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={ newPostElement }
                        value={ props.newText }
                        onChange={ onPostChange }
                    />
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
                {postsElements}
            </div>
        </div>
    )
}

