import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {routes} from "../routes";
import PageNotFound from "../pages/PageNotFound";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} exact/>
            )}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default AppRouter;