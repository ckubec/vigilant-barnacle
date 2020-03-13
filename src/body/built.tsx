import React from 'react';
import {
    Card,
    Container,
    Row
} from "react-bootstrap";
import './style/card.scss';
import {SectionIcons, SmallIcons} from "../features/iconmanager";


export function Built (){
    const card = {
        fontSize: ".75rem",
        textAlign: "center" as 'center'
    };
    let className = "build";

    return (
        <div className="background" id="Built">
            <div className="lrgCard">
                <Container className="title-bar">
                    <Row id="card-title-p">
                        {SectionIcons("Built")}
                        <h2 id="card-title">Built Using</h2>
                    </Row>
                </Container>

                <Card.Body>
                        <Container>
                            <Row>
                                <div className={"col"} style={card}>
                                    {SmallIcons("React", className)}
                                    <div>React</div>
                                </div>
                                <div className={"col"} style={card}>
                                    {SmallIcons("Typescript", className)}
                                    <div>Typescript</div>
                                </div>
                                <div className={"col"} style={card}>
                                    {SmallIcons("Bootstrap", className)}
                                    <div>Bootstrap</div>
                                </div>
                                <div className={"col"} style={card}>
                                    {SmallIcons("Redux", className)}
                                    <div>Redux</div>
                                </div>
                            </Row>
                        </Container>
                </Card.Body>
            </div>
        </div>
    );
}