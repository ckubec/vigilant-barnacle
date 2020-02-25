import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Card, Col, Container, Row} from "react-bootstrap";
import iconImage from "../img/contact-icon.svg";
import './card.scss';
import './contact.scss';

let links = [
    {name:"LinkedIn", href:"https://www.linkedin.com/in/chriskubec/"},
    {name:"Email", href:"mailto:ckubec@gmail.com"},
    {name:"Text", href:"sms:206-245-0897"},
    {name:"Phone", href:"tel:206-245-0897"},
    {name:"Github", href:"https://github.com/ckubec"},
];

export class Contact extends React.Component {
    render() {
        const gutter = {
            marginRight: "0.5rem",
            maxWidth: "40px",
            maxHeight: "40px"
        };
        let linkdivs = links.map(item => link(item.name, item.href));

        return (
            <div className="lrgCard" id="Contact">
                <Container className="title-bar">
                    <Row id="card-title-p" >
                        <img className="img-fluid" style={gutter} src={iconImage} width={40} color={"white"} alt={"contact section"}/>
                        <h2 id={"card-title"} >Contact</h2>
                    </Row>
                </Container>

                <Container >
                    <Row className="justify-content-center">
                        {linkdivs}
                    </Row>
                </Container>
            </div>
        );
    }
}

function link(key: string, href: string) {
    return(
        <Col xs={4} sm={2} >
            <a href={href} >
                <img src={require("../img/contact/" + key + ".svg")} alt={key} />
                <h6 >{key}</h6>
            </a>
        </Col>
    );
}