const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    profilePage: {
        posts: [
            {id: 1, message: 'hi, how are you?', likesCount: 12},
            {id: 2, message: 'it is my first post', likesCount: 10},
            {id: 3, message: 'yo', likesCount: 22},
            {id: 4, message: 'yoyo', likesCount: 213},
        ],
        newPostText: 'it kamasutra'
    }
};


export function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default :
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

