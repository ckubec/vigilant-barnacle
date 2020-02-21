import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Card, Container, Row} from "react-bootstrap";
import iconImage from "../img/contact-icon.svg";
import './card.scss';


export class Contact extends React.Component {
    render() {
        const gutter = {
            marginRight: "0.5rem",
            maxWidth: "40px",
            maxHeight: "40px"
        };

        const testing = {};

        return (
            <Card className="lrgCard" id="Contact">
                <Card.Header className="text-justify" as={"h3"}>
                    <Container>
                        <Row id="card-title-p" >
                            <img className="img-fluid" style={gutter} src={iconImage} width={40} color={"white"} alt={"contact section"}/>
                            <div id={"card-title"} >Contact</div>
                        </Row>
                    </Container>
                </Card.Header>

                <Card.Body>

                    Testing space
                </Card.Body>
            </Card>
        );
    }
}