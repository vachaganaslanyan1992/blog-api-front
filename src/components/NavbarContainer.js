import React from 'react';
import {Link} from "react-router-dom";
import {POST_LIST} from "../utils/consts";

const NavbarContainer = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark ">
            <Link to={POST_LIST} className="navbar-brand m-lg-2">
                Blog Page
            </Link>
        </nav>
    );
};

export default NavbarContainer;