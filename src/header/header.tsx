import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar, NavbarBrand, NavItem} from "react-bootstrap";
import './header.css';
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import {BannerCanvas} from "./banner";

// TODO Add backend most likely express to retain data.
let tabs = ["Chris Kubec", "About", "Skills", /*"Experience", "Projects",*/ "Connect" /*, "Archive"*/];
// TODO extract styles into CSS files to separate style from code.
const buttonstyle = {
    color: "#ffffff",
    fontFamily: 'Dosis, sans-serif',
    backgroundColor: "transparent",
    padding: ".5em 1.5em .5em",
    fontSize: "20px",
    marginRight: ".5em",
    textShadow: "160"
};

export class Header extends React.Component {
    render() {
        const styling = {
            color: '#3739ff',
            borderBottom: "3px solid black",
            background: "black",
            justifyContent: "center",

        };
        const brand = tabs.shift();
        let items = tabs.map(tab => myNavItems(tab));

        const togglestyle = {
            padding: ".5em 1.5em .5em",
            color: "white",
        };

        const titlestyle = {
            color: "white",
            fontFamily: 'Dosis, sans-serif',
            fontSize: "20px",
        };

        return (
            <>
                {/*<Navbar>*/}
                    <BannerCanvas />
                    <Navbar className="sticky-top" style={styling} expand="md" >
                        <NavbarBrand style={titlestyle}><Nav.Link style={buttonstyle}>{brand?.toUpperCase()}</Nav.Link></NavbarBrand>
                        <NavbarToggle aria-controls="responsive-navbar-nav" style={togglestyle}/>
                        <NavbarCollapse id="responsive-navbar-nav" >
                            <Nav className="justify-content-center">{items}</Nav>
                        </NavbarCollapse>
                    </Navbar>
                {/*</Navbar>*/}
            </>
        );
    }
}

function myNavItems(name:string) {
    return (
        <NavItem key={name} >
            <Nav.Link style={buttonstyle} href={"#"+name}>{name.toUpperCase()}</Nav.Link>
        </NavItem>
    );
}