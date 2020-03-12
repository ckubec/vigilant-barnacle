import React from 'react';
import {
    Card,
    Container,
    Row
} from "react-bootstrap";
import './style/card.scss';
import iconImage from "../img/icons/built-icon.svg";


export class Built extends React.Component {
    render() {
        const card = {
            fontSize: ".75rem",
            textAlign: "center" as 'center'
        };

        return (
            <div className="background" id="Built">
                <div className="lrgCard">
                    <Container className="title-bar">
                        <Row id="card-title-p">
                            <img className="img-fluid" src={iconImage} width={40} color={"white"} alt={"about section"} />
                            <h2 id="card-title">Built Using</h2>
                        </Row>
                    </Container>

                    <Card.Body>
                            <Container>
                                <Row>
                                    <div className={"col"} style={card}>
                                        <img className={"mr-3"} src={require("../img/skills/React.svg")} alt={"ReactImage"}/>
                                        <div>React</div>
                                    </div>
                                    <div className={"col"} style={card}>
                                        <img className={"mr-3"} src={require("../img/skills/Typescript.svg")} alt={"TypescriptImage"}/>
                                        <div>Typescript</div>
                                    </div>
                                    <div className={"col"} style={card}>
                                        <img className={"mr-3"} src={require("../img/skills/ReactBootstrap.svg")} alt={"ReactBootstrapImage"}/>
                                        <div>Bootstrap</div>
                                    </div>
                                    <div className={"col"} style={card}>
                                        <img className={"mr-3"} src={require("../img/skills/Redux.svg")} alt={"ReduxImage"}/>
                                        <div>Redux</div>
                                    </div>
                                </Row>
                            </Container>
                    </Card.Body>
                </div>
            </div>
        );
    }
}