export const initialState = {
    data: null,
    loading: true,
    error: null,
};

const postShowReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
}


export default postShowReducer;