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
                        This site is still under construction, come back soon (optimized for mobile first).  <i>Posted - 2/25/20</i>
                    </Card.Text>
                    <AccordionCollapse eventKey="open">
                    <Card.Text>
                        <p>
                            Graduating from University of Washington in August 2016, I started my career at GE Healthcare in June 2017,
                            after a post college Europe trip. At GE under the mentorship of a great architect (Barry) grew into the
                            role of DevOps engineer. Learning valuable skills in scripting, C#, Java, Python, Jenkins and Batch.
                        </p>
                        <p>
                            After spending a year rebuilding the entire monolith infrastructure at GE into a microservice architecture. I had
                            outgrown my role and started applying for positions and landed at Microsoft working in the Windows Search Team.
                            It was here on this team I had my first exposure to Full Stack development. Working in React, using Redux,
                            with Typescript, and C++. On the search team I developed prototypes for the current File Explorer.
                            Created a troubleshooter for the search box.
                        </p>
                        <p>
                            With a team restructure leaving me stranded, I ended up at Tableau. Here I returned to my DevOps roots and
                            realized Full Stack/Front End is where I would rather be. After helping Tableau Software migrate off
                            the deprecating Python 2.7 version they were running and Salesforce denying a contract extension here I am today.
                            Now working on a portfolio to present my work and skills.
                        </p>


                    </Card.Text>
                    </AccordionCollapse>
                    <AccordionToggle as={Button} variant="link" eventKey="open">more</AccordionToggle>
                </Card.Body>
            </div>
        );
    }
}