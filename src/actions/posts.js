import PostService from "../services/PostService";

export const getAllPosts = async (dispatch) => {
    try {
        const data = await PostService.getAll();
        dispatch({type: 'FETCH_SUCCESS', payload: data})
    } catch (error) {
        dispatch({type: 'FETCH_ERROR', error})
    }
}

export const getPost = async (id, dispatch) => {
    try {
        const data = await PostService.get(id);
        dispatch({type: 'FETCH_SUCCESS', payload: data})
    } catch (error) {
        dispatch({type: 'FETCH_ERROR', error})
    }
}

export const deletePost = async (id) => {
    try {
        return await PostService.delete(id);
    } catch (error) {
        return {failed: error}
    }
}

export const createPost = async (data) => {
    return await PostService.create(data);
}
