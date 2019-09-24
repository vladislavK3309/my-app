import React from "react";
import ProfileInfo from "./ProfileInfo/PropfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


export default function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

