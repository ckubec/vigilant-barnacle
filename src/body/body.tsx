import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Accordion} from "react-bootstrap";
import {Skills} from "./skills";
import {About} from "./about";


export class Body extends React.Component {

    render() {
        const bodyStyle = {
            width: "75%",
            justifyContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "black"
        };
        return (
                <div style={bodyStyle}>
                    <Accordion>
                        <About />
                        <Skills />
                        {/*<Skills />*/}
                    </Accordion>
                </div>
        );
    }
}