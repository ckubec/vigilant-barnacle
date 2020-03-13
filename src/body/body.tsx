import React from 'react';
import {Accordion} from "react-bootstrap";
import {Skills} from "./skills";
import {About} from "./about";
import {Built} from "./built";
import {Contact} from "./contact";
import {Portfolio} from "./portfolio";
import './style/card.scss';
import {useSelector} from "react-redux";
import {selectLight} from "../features/stateSlice";


export function Body () {
    const lightMode = useSelector(selectLight);

    return (
            <div className={(lightMode) ? "light" : "dark"}>
                <Accordion>
                    <About />
                    <Skills />
                    <Portfolio />
                    <Contact />
                    <Built />
                </Accordion>
            </div>
    );
}