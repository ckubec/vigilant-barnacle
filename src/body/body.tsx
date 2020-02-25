import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Accordion} from "react-bootstrap";
import {Skills} from "./skills";
import {About} from "./about";
import {Built} from "./built";
import {Contact} from "./contact";


export class Body extends React.Component {
    render() {
        return (
                <div className={"Body"}>
                    <Accordion>
                        <About />
                        <Skills />
                        <Contact />
                        <Built />
                    </Accordion>
                </div>
        );
    }
}