import PostCategoryService from "../services/PostCategoryService";

export const getAllPostsCategories = async () => {
    return await PostCategoryService.getAll();
}

export const createCategory = async (name) => {
    try {
        return await PostCategoryService.create(name);
    } catch (error) {
        return {failed: error}
    }
}