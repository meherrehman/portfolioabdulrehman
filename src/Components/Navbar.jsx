import React from "react";
import { NavLink } from "react-router-dom";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import HomeIcon from '@mui/icons-material/Home';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import ContactsIcon from '@mui/icons-material/Contacts';
import "../index.css";

const Navbar = () =>{

    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav-scroll">
        <div class="container p-3" id="navbar_bg">
        <NavLink class="navbar-brand" to="/">HOLA</NavLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span><DragHandleIcon /></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
            <li className="nav-item nav-link-parent mt-3">
                <NavLink activeClassName="active_class" to="/" className="nav-link" exact>Home</NavLink>
                <div className="nav-link-icon nav-link-child d-lg-block d-none"><HomeIcon /></div>
            </li>
            <li className="nav-item nav-link-parent mt-3">
                <NavLink activeClassName="active_class" to="/Project" className="nav-link" exact>Projects</NavLink>
                <div className="nav-link-icon nav-link-child d-lg-block d-none"><SplitscreenIcon /></div>
            </li>
            <li className="nav-item nav-link-parent mt-3">
                <NavLink activeClassName="active_class" to="/Contact" className="nav-link" exact>Contact</NavLink>
                <div className="nav-link-icon nav-link-child d-lg-block d-none"><ContactsIcon /></div>
            </li>
        </ul> 
        </div>
        </div>
        </nav>
        </>
    )
};

export default Navbar;