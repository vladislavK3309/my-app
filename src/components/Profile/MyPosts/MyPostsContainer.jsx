import {addPost, updateNewPostText} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

export default connect(mapStateToProps, {
    addPost,
    updateNewPostText
})(MyPosts);

