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
            backgroundColor:"black",
            fontSize: ".75rem",
            textAlign: "center" as 'center'
        };

        const built = {
            //width: "50%",
            padding: "0px",
            margin: "auto",
            verticalAlign: "middle"
        }

        return (
            <div className="lrgCard" id="Built" style={built}>
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
                            </Row>
                        </Container>
                </Card.Body>
            </div>
        );
    }
}