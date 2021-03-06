import React from 'react';
import {
    Card,
    Container,
    Row
} from "react-bootstrap";
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
                        <h1 id="card-title">Built Using</h1>
                    </Row>
                </Container>

                <Card.Body>
                        <Container>
                            <Row>
                                <div className={"col-3"} style={card}>
                                    {SmallIcons("React", className)}
                                    <div>React</div>
                                </div>
                                <div className={"col-3"} style={card}>
                                    {SmallIcons("Typescript", className)}
                                    <div>Typescript</div>
                                </div>
                                <div className={"col-3"} style={card}>
                                    {SmallIcons("Bootstrap", className)}
                                    <div>Bootstrap</div>
                                </div>
                                <div className={"col-3"} style={card}>
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