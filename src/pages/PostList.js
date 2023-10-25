import React, {useEffect, useReducer} from 'react';
import postReducer, {initialState} from "../redux/post-reducer";
import {Button, ListGroup} from "react-bootstrap";
import {POST_ADD, POST_SHOW} from "../utils/consts";
import {useNavigate} from 'react-router-dom';
import {getAllPosts} from "../actions/posts";


const PostList = () => {
    const [state, dispatch] = useReducer(postReducer, initialState);
    const navigate = useNavigate();

    const handleViewPost = (postId) => {
        navigate(`${POST_SHOW}/${postId}`);
    };

    const handleAddPost = () => {
        navigate(`${POST_ADD}`);
    };

    useEffect(() => {
        getAllPosts(dispatch);
    }, []);

    return (
        <div>
            {state.loading ? (
                <p className={'text-center'}>Loading...</p>
            ) : state.error ? (
                <p className={'text-center'}>Error: {state.error.message}</p>
            ) : (
                <div className="w-50 mx-auto mt-4">
                    <div className={'mb-2 d-flex justify-content-end'}>
                        <Button variant="dark" onClick={handleAddPost}>
                            Add Post
                        </Button>
                    </div>
                    <ListGroup className="post-list">
                        {state.posts.map(post => (
                            <ListGroup.Item key={post.id} onClick={() => handleViewPost(post.id)} action>
                                <div className="d-flex w-100 justify-content-between">
                                    <h5>{post.title}</h5>
                                    <small className="post-categories">{post.categories.join(', ')}</small>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            )}
        </div>
    );
};

export default PostList;