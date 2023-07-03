import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import navLinks from "../../constantsPages";

const Header = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        const activeLink = navLinks.find((link) => link.linkTo === path);
        const index = navLinks.indexOf(activeLink);
        setActiveIndex(index);
    }, [location]);

    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark" className="fixed-top d-flex justify-content-between" style={{ padding: "10px 20px" }}>
                <Navbar.Brand href="/">
                    <ArrowBackIosSharpIcon />
                    My App /
                    <ArrowForwardIosSharpIcon />
                </Navbar.Brand>
                <Nav>
                    {navLinks.map((link, index) => (
                        <Nav.Link
                            key={index}
                            href={link.linkTo}
                            className={activeIndex === index ? "active nav-link" : "nav-link"}
                            style={activeIndex === index ? { borderBottom: "2px solid white" } : null}
                        >
                            {link.name}
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;