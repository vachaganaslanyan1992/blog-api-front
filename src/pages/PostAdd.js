import React, {useCallback, useEffect, useReducer, useState} from 'react';
import {Button, Form, InputGroup, FormControl} from 'react-bootstrap';
import Select from 'react-select';
import postCreateReducer, {initialState} from "../redux/post-create-reducer";
import {useNavigate} from "react-router-dom";
import {POST_LIST} from "../utils/consts";
import {getAllPostsCategories} from "../actions/postCategories";
import {createPost} from "../actions/posts";

const PostAdd = () => {
    const [state, dispatch] = useReducer(postCreateReducer, initialState);
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!state.title) errors.title = "Title is required";
        if (state.categories.length === 0) errors.categories = "At least one category is required";
        if (!state.content) errors.content = "Content is required";
        return errors;
    };


    const handleSelectCategory = (selectedOptions) => {
        const selectedCategoryIds = selectedOptions.map(option => option.value);
        dispatch({type: 'ADD_CATEGORIES', categories: selectedCategoryIds});
    };

    const handleSubmit = async () => {
        event.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
            await createPost(state);
            alert('Successfully added');
            navigate(`${POST_LIST}`);
        } else {
            setErrors(validationErrors);
        }
    };

    const handleCancel = () => {
        navigate(`${POST_LIST}`);
    };

    const initCategories = useCallback(async () => {
        const allCategories = await getAllPostsCategories();
        if (allCategories?.length > 0) {
            const categoryOptions = allCategories.map((category) => {
                return {label: category.category_name, value: category.category_id};
            })
            setCategories(categoryOptions);
        }
    }, []);

    useEffect(() => {
        initCategories();
    }, [initCategories]);


    return (
        <div className="w-50 mx-auto mt-4">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label className={'fw-bold'}>Title</Form.Label>
                    <InputGroup>
                        <FormControl
                            placeholder="Enter title"
                            aria-label="Title"
                            aria-describedby="basic-addon1"
                            value={state.title}
                            onChange={(e) => dispatch({type: 'ADD_TITLE', title: e.target.value})}
                        />
                    </InputGroup>
                    {errors.title && <div className="text-danger">{errors.title}</div>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className={'fw-bold'}>Categories</Form.Label>
                    <Select
                        isMulti
                        options={categories}
                        onChange={handleSelectCategory}
                    />
                    {errors.categories && <div className="text-danger">{errors.categories}</div>}
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-3">
                    <Form.Label className={'fw-bold'}>Contents</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={state.content}
                        onChange={(e) => dispatch({type: 'ADD_CONTENT', content: e.target.value})}
                    />
                    {errors.content && <div className="text-danger">{errors.content}</div>}
                </Form.Group>
                <Button variant="dark" onClick={handleSubmit}>Save</Button>
                <Button variant="dark" onClick={handleCancel} className={'ms-3'}>Cancel</Button>
            </Form>
        </div>
    );
};

export default PostAdd;
