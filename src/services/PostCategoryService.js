class PostCategoryService {
    constructor() {
        this.baseUrl = 'http://blog.loc/api/v1'; // Replace with your API base URL
    }

    async getAll() {
        const response = await fetch(`${this.baseUrl}/post_categories`);
        if (!response.ok) {
            throw new Error(`Failed to retrieve posts: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    }

    async create(name) {
        const response = await fetch(`${this.baseUrl}/post_category_create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });
        if (!response.ok) {
            throw new Error(`Failed to create post: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    }
}

export default new PostCategoryService();