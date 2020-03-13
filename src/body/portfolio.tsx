import React from 'react';
import {AccordionToggle, Button, Container, Row} from "react-bootstrap";
import './style/portfolio.scss';
import {SectionIcons} from "../features/iconmanager";
import {useSelector} from "react-redux";
import {selectLight} from "../features/stateSlice";


export function Portfolio () {
    const light = useSelector(selectLight);
    return (
        <div className="background" id="Portfolio">
            <div className="lrgCard">
                <Container className="title-bar">
                    <Row id="card-title-p" >
                        {SectionIcons("Portfolio")}
                        <h2 id="card-title">Portfolio</h2>
                    </Row>
                </Container>

                <div className="container-fluid" >
                    <p className="bottom-p">
                        I am currently building a portfolio to reflect my current skill set. Please visit my LinkedIn and Github below to see my old college projects.
                        Also please take a look at the code I wrote for this site. <Button variant={light ? "dark" : "light"} href="https://github.com/ckubec/vigilant-barnacle">Here</Button>
                    </p>
                </div>
            </div>
        </div>
    );
}