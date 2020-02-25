import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Card,
    Container,
    Row
} from "react-bootstrap";
import './card.scss';
import iconImage from "../img/built-icon.svg";


export class Built extends React.Component {
    render() {
        const gutter = {
            marginRight: "0.5rem",
            maxWidth: "40px",
            maxHeight: "40px"
        };

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
                <Card.Header style={built} as={"h6"}>
                    <Container>
                        <Row id="card-title-p">
                            <img className="img-fluid" src={iconImage} style={gutter} width={40} color={"white"} alt={"about section"} />
                            <div id="card-title">Built Using</div>
                        </Row>
                    </Container>
                </Card.Header>

                <Card.Body>
                        <Container>
                            <Row>
                                <div className={"col"} style={card}>
                                    <img className={"mr-3"} src={require("../img/skills/React.svg")} />
                                    <div>React</div>
                                </div>
                                <div className={"col"} style={card}>
                                    <img className={"mr-3"} src={require("../img/skills/Typescript.svg")} />
                                    <div>Typescript</div>
                                </div>
                                <div className={"col"} style={card}>
                                    <img className={"mr-3"} src={require("../img/skills/ReactBootstrap.svg")} />
                                    <div>Bootstrap</div>
                                </div>
                            </Row>
                        </Container>
                </Card.Body>
            </div>
        );
    }
}