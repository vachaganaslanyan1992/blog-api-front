export const initialState = {
    posts: [],
    loading: true,
    error: null,
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, posts: action.payload };
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
}


export default postReducer;