import React from 'react';
import {Accordion} from "react-bootstrap";
import {Skills} from "./skills";
import {About} from "./about";
import {Built} from "./built";
import {Contact} from "./contact";
import {Portfolio} from "./portfolio";


export class Body extends React.Component {
    render() {
        return (
                <div className={"Body"}>
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
}