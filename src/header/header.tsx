import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar} from "react-bootstrap";
import './header.scss';
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import {BannerCanvas} from "./banner";
import {lightModeSwap} from '../features/stateSlice';
import {useDispatch} from "react-redux";


let tabs = ["Chris Kubec", "About", "Skills", "Portfolio", "Contact"];

export function Header () {
    const dispatch = useDispatch();
    const brand = tabs.shift();
    let items = tabs.map(tab => myNavItems(tab));

    return (
        <>
            <BannerCanvas key={"Banner"} ></BannerCanvas>
            <Navbar collapseOnSelect sticky="top" expand="md" >
                <Nav.Link className="title">{brand?.toUpperCase()}</Nav.Link>

                <NavbarToggle className="menuToggle">
                    MENU
                </NavbarToggle>

                <NavbarCollapse id="responsive-navbar-nav" >
                    <Nav className="justify-content-center mr-auto">{items}</Nav>
                </NavbarCollapse>
                <Nav.Link key={"light"} onClick={() => dispatch(lightModeSwap())}>Light Switch</Nav.Link>
            </Navbar>
        </>
    );
}

function myNavItems(name:string) {
    return (
        <Nav.Link href={"#"+name} key={name}>{name.toUpperCase()}</Nav.Link>
    );
}