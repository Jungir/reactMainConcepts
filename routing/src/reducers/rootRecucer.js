const initalState = {
    posts : [
        {id: 1, title: 'The best cheif ever 1', body: ' If you want your app to work offline and load faster'},
        {id: 2, title: 'The best cheif ever 2', body: ' If you want your app to work offline and load faster'},
        {id: 3, title: 'The best cheif ever 3', body: ' If you want your app to work offline and load faster'}
    ]
};
const rootReducer = (state = initalState, action)=>{
    if(action.type === 'DELETE_POST'){
        let newPost = state.posts.filter(post => post.id !== action.id);
        return {
            ...state, posts : newPost
        };
    }
    return state;
};
export default rootReducer;
