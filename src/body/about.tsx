import React from 'react';
import {AccordionCollapse, AccordionToggle, Button, Card, Container, Row} from "react-bootstrap";
import aboutImage from "../img/about-icon.svg";
import './card.scss';


export class About extends React.Component {
    render() {
        return (
            <div className="lrgCard" id="About">
                <Container className="title-bar">
                    <Row id="card-title-p">
                        <img className="img-fluid" src={aboutImage} width={40} color={"white"} alt={"about section"}/>
                        <h2 id="card-title">About Me</h2>
                    </Row>
                </Container>

                <Card.Body>
                    <Card.Text>
                        Hi my name is Chris, a Full Stack Software Engineer located in Seattle, Washington...
                        This site is still under construction, come back soon.  <i>Posted - 2/25/20</i>
                    </Card.Text>
                    <AccordionCollapse eventKey="open">
                    <Card.Text>


                    </Card.Text>
                    </AccordionCollapse>
                    <AccordionToggle as={Button} variant="link" eventKey="open">more</AccordionToggle>
                </Card.Body>
            </div>
        );
    }
}