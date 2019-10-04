const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    {id: 1, message: 'hi, how are you?', likesCount: 12},
    {id: 2, message: 'it is my first post', likesCount: 10},
    {id: 3, message: 'yo', likesCount: 22},
    {id: 4, message: 'yoyo', likesCount: 213},
  ],
  newPostText: 'it kamasutra',
  profile: null
};

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    case UPDATE_NEW_POST_TEXT: {
      return {...state, newPostText: action.newText}
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    default:
      return state;
  }
}

export const addPost = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

