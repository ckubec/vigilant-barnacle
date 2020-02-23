import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Accordion} from "react-bootstrap";
import {Skills} from "./skills";
import {About} from "./about";
import {Built} from "./built";
import {Contact} from "./connect";


export class Body extends React.Component {

    render() {
        // const bodyStyle = {
        //     // width: "85%",
        //     //justifyContent: "center",
        //     //marginLeft: "auto",
        //     //marginRight: "auto",
        //     //backgroundColor: "black"
        // };
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