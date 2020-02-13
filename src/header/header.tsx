import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar, NavbarBrand, NavItem} from "react-bootstrap";
import './header.css';
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import {BannerCanvas} from "./banner";

// TODO Add backend most likely express to retain data.
let tabs = ["Chris Kubec", "About", "Skills", /*"Experience", "Projects",*/ "Connect" /*, "Archive"*/];

export class Header extends React.Component {
    render() {
        const brand = tabs.shift();
        let items = tabs.map(tab => myNavItems(tab));

        return (
            <>
                {/*<Navbar>*/}
                <BannerCanvas key={"Banner"} ></BannerCanvas>
                    <Navbar collapseOnSelect className="sticky-top" expand="md" >
                        {/*<NavbarBrand><Nav.Link>{brand?.toUpperCase()}</Nav.Link></NavbarBrand>*/}
                        <NavbarToggle className="menuToggle"  >
                            {/*<div className="container">*/}
                            {/*    <div className="bar1"></div>*/}
                            {/*    <div className="bar2"></div>*/}
                            {/*    <div className="bar3"></div>*/}
                            {/*</div>*/}
                            MENU
                        </NavbarToggle>
                        {/*<NavbarBrand style={titlestyle}><Nav.Link style={buttonstyle}>{brand?.toUpperCase()}</Nav.Link></NavbarBrand>*/}
                        <NavbarCollapse id="responsive-navbar-nav" >
                            <Nav className="justify-content-center mr-auto">{items}</Nav>
                        </NavbarCollapse>
                    </Navbar>
                {/*</Navbar>*/}
            </>
        );
    }
}

function myNavItems(name:string) {
    return (
        // <NavItem key={name} >
            <Nav.Link href={"#"+name}>{name.toUpperCase()}</Nav.Link>
        // </NavItem>
    );
}