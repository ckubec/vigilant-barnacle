import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './style/contact.scss';
import {LargeIcons, SectionIcons} from "../features/iconmanager";

let links = [
    {name:"LinkedIn", href:"https://www.linkedin.com/in/chriskubec/"},
    {name:"Email", href:"mailto:ckubec@gmail.com"},
    {name:"Text", href:"sms:206-245-0897"},
    {name:"Phone", href:"tel:206-245-0897"},
    {name:"Github", href:"https://github.com/ckubec"},
];

export function Contact (){
    let linkdivs = links.map(item => link(item.name, item.href));

    return (
        <div className="background" id="Contact">
            <div className="lrgCard">
                <Container className="title-bar" id="titleBar">
                    <div>
                    <Row id="card-title-p">
                        {SectionIcons("Contact")}
                        <h1 id={"card-title"} >Contact</h1>
                    </Row>
                    </div>
                </Container>

                <Container className="body">
                    <Row className="justify-content-center">
                        {linkdivs}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

function link(key: string, href: string) {
    return(
        <Col xs={4} sm={2} key={key+"link"}>
            <a href={href}>
                {LargeIcons(key)}
                <h6>{key}</h6>
            </a>
        </Col>
    );
}