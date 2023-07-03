import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <footer>
            <Navbar bg="dark" expand="lg" variant="dark" className="fixed-bottom d-flex justify-content-between align-items-center" style={{ padding: "10px 20px" }}>
                <Navbar.Brand href="/">
                    <ArrowBackIosSharpIcon />
                    My App /
                    <ArrowForwardIosSharpIcon />
                </Navbar.Brand>
                <p className="p-0 m-0" style={{ color: 'grey' }}>Copyright © 2023. Created by Yaroslava Marchenko.</p>
                <Nav>
                    <Nav.Link
                        href={"https://github.com/FortuneFame"}
                        target='blank'>
                        <GitHubIcon />
                    </Nav.Link>
                    <Nav.Link
                        href={"mailto:fortunefame1710@gmail.com"}>
                        <MailOutlineIcon />
                    </Nav.Link>
                    <Nav.Link
                        href={"tel:+48735635597"}>
                        <PhoneIcon />
                    </Nav.Link>
                </Nav>
            </Navbar>
        </footer>
    );
};

export default Footer;