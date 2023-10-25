import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import store from "./redux/store-conf";
import {Provider} from "react-redux";
import NavbarContainer from "./components/NavbarContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <NavbarContainer />
                <AppRouter/>
            </Router>
        </Provider>
    );
}

export default App;