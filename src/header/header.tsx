import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar} from "react-bootstrap";
import './header.scss';
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import {BannerCanvas} from "./banner";
import {lightModeSwap, selectLight} from '../features/stateSlice';
import {useDispatch, useSelector} from "react-redux";


let tabs = ["About", "Skills", "Portfolio", "Contact"];

export function Header () {
    const dispatch = useDispatch();
    const mode = useSelector(selectLight);
    let items = tabs.map(tab => myNavItems(tab));

    return (
        <>
            <BannerCanvas key={"Banner"} ></BannerCanvas>
            <Navbar variant={mode ? "light" : "dark"} collapseOnSelect sticky="top" expand="md" >
                <Nav.Link className="title">{"Chris Kubec".toUpperCase()}</Nav.Link>

                <NavbarToggle className="menuToggle col-9">
                    MENU
                </NavbarToggle>

                <NavbarCollapse id="responsive-navbar-nav">
                    <Nav className="justify-content-center mr-auto">{items}</Nav>
                </NavbarCollapse>
                <Nav.Link className="col-3" id="lighttoggle" key={"light"} onClick={() => dispatch(lightModeSwap())}>
                    <svg height="2rem" viewBox="0 0 512 512" fill={mode ? "black" : "white"} /*visibility={mode ? "hidden" : "visible"}*/>
                        <path d="m57.8125 337.492188v57.175781c0 32.425781 26.453125 58.878906 58.878906 58.878906h57.175782l40.53125 40.53125c11.09375 11.09375 26.027343 17.28125 41.601562 17.28125s30.507812-6.1875 41.601562-17.28125l40.53125-40.53125h57.175782c32.425781 0 58.878906-26.453125 58.878906-58.878906v-57.175781l40.53125-40.53125c11.09375-11.09375 17.28125-26.027344 17.28125-41.601563s-6.1875-30.507813-17.28125-41.597656l-40.53125-40.535157v-57.171874c0-32.429688-26.453125-58.882813-58.878906-58.882813h-57.175782l-40.53125-40.53125c-22.1875-22.1875-61.015624-22.1875-83.203124 0l-40.53125 40.53125h-57.175782c-32.425781 0-58.878906 26.453125-58.878906 58.882813v57.171874l-40.53125 40.535157c-11.09375 11.089843-17.28125 26.023437-17.28125 41.597656s6.1875 30.507813 17.28125 41.601563zm198.1875-210.132813c8.746094 0 16 7.253906 16 16v224c0 8.746094-7.253906 16-16 16-74.238281 0-128-53.757813-128-128 0-74.238281 53.761719-128 128-128zm0 0"/>
                    </svg>
                </Nav.Link>
            </Navbar>
        </>
    );
}

function myNavItems(name:string) {
    return (
        <Nav.Link href={"#"+name} key={name}>{name.toUpperCase()}</Nav.Link>
    );
}