import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar} from "react-bootstrap";
import './header.scss';
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import {BannerCanvas} from "./banner";

// TODO Add backend most likely express to retain data.
let tabs = ["Chris Kubec", "About", "Skills", /* "Projects",*/ "Contact" /*, "Archive"*/];

export class Header extends React.Component {
    render() {
        const brand = tabs.shift();
        let items = tabs.map(tab => myNavItems(tab));

        return (
            <>
                <BannerCanvas key={"Banner"} ></BannerCanvas>

                <Navbar collapseOnSelect className="sticky-top" expand="md" >
                    <Nav.Link className="title">{brand?.toUpperCase()}</Nav.Link>

                    <NavbarToggle className="menuToggle">
                        MENU
                    </NavbarToggle>

                    <NavbarCollapse id="responsive-navbar-nav" >
                        <Nav className="justify-content-center mr-auto">{items}</Nav>
                    </NavbarCollapse>
                </Navbar>
            </>
        );
    }
}

function myNavItems(name:string) {
    return (
        <Nav.Link href={"#"+name}>{name.toUpperCase()}</Nav.Link>
    );
}