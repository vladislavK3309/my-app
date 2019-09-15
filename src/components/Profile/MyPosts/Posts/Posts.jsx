import React from "react";
import m from "./Posts.module.css";



export default function Post(props) {
    return (
        <div className={m.item}>
            <img src="https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg" alt='avatar'/>
            {props.message}
            <div>
                like {props.likesCount}
            </div>
        </div>
    )
};

