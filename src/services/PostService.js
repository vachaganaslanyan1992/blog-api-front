class PostService {
    constructor() {
        this.baseUrl = 'http://blog.loc/api/v1'; // Replace with your API base URL
    }

    async getAll() {
        const response = await fetch(`${this.baseUrl}/post_index`);
        if (!response.ok) {
            throw new Error(`Failed to retrieve posts: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    }

    async get(postId) {
        const response = await fetch(`${this.baseUrl}/post_show/${postId}`);
        if (!response.ok) {
            throw new Error(`Failed to retrieve post: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    }

    async create(data) {
        const response = await fetch(`${this.baseUrl}/post_create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to create post');
        }
        return response.json();
    }

    async delete(postId) {
        const response = await fetch(`${this.baseUrl}/post_delete/${postId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Failed to delete post: ${postId}`);
        }
        return { success: true };
    }
}

export default new PostService();