export const initialState = {
    title: '',
    content: '',
    categories: [],
};

const postCreateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TITLE':
            return { ...state, title: action.title };
        case 'ADD_CONTENT':
            return { ...state, content: action.content };
        case 'ADD_CATEGORIES':
            return { ...state, categories: action.categories };
        default:
            return state;
    }
}


export default postCreateReducer;