import React, {useEffect, useReducer} from 'react';
import {useParams, Link, useNavigate} from 'react-router-dom';
import {Container, Card, Button} from 'react-bootstrap';
import {getPost, deletePost} from '../actions/posts';  // Assuming deletePost is your delete function
import postShowReducer, {initialState} from "../redux/post-show-reducer";
import {POST_LIST} from "../utils/consts";

const PostShow = () => {
    const [state, dispatch] = useReducer(postShowReducer, initialState);
    const {id} = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        const result = await deletePost(id, dispatch);
        if (result.success) {
            alert('successfully deleted');
            navigate(`${POST_LIST}`);
        } else {
            alert(result.failed);
        }
    };

    useEffect(() => {
        getPost(id, dispatch);
    }, [id]);

    return (
        <Container className="mt-4">
            {state.loading ? (
                <p className={'text-center'}>Loading...</p>
            ) : state.error ? (
                <p className={'text-center'}>Error: {state.error.message}</p>
            ) : (
                <div>
                    <div className={'d-flex justify-content-between mb-3'}>
                        <Link to={POST_LIST} className="btn btn-link ">&lt; Back to Posts</Link>
                        <Button variant="dark" onClick={handleDelete}>Delete Post</Button>
                    </div>
                    <Card>
                        <Card.Header as="h5">{state.data.title}</Card.Header>
                        <Card.Body>
                            <Card.Text>Categories: {state.data.categories.join(', ')}</Card.Text>
                            <Card.Text>{state.data.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )}
        </Container>
    );
};

export default PostShow;
