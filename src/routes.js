import PostList from "./pages/PostList";
import PostAdd from "./pages/PostAdd";
import PostShow from "./pages/PostShow";
import {POST_ADD, POST_LIST, POST_SHOW} from "./utils/consts";

export const routes = [
    {
        path: POST_LIST,
        Component: PostList
    },
    {
        path: POST_ADD,
        Component: PostAdd
    },
    {
        path: POST_SHOW + '/:id',
        Component: PostShow
    },
];