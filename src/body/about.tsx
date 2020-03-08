import React from 'react';
import {AccordionCollapse, AccordionToggle, Button, Card, Container, Row} from "react-bootstrap";
import aboutImage from "../img/icons/about-icon.svg";
import './style/card.scss';

type AboutState ={
    expandedBlock: boolean;
}

export class About extends React.Component {
    state: AboutState = {
        expandedBlock: false
    }

    constructor(props:any) {
        super(props);
        this.expanded = this.expanded.bind(this);
    }

    expanded() {
        if (this.state.expandedBlock) {
            this.setState({expandedBlock: false});
        } else {
            this.setState({expandedBlock: true});
        }
    }

    render() {
        return (
            <div className="background" id="About">
                <div className="lrgCard">
                    <Container className="title-bar">
                        <Row id="card-title-p">
                            <img className="img-fluid" src={aboutImage} width={40} alt={"about section"}/>
                            <h2 id="card-title">About Me</h2>
                        </Row>
                    </Container>

                    <div className="container-fluid">
                        <Card.Text>
                            Hello, my name is Chris, a Full Stack Software Engineer. I am located in Seattle, Washington.
                            This site is still under construction, please come back soon! This site is optimized for mobile first. <i>Posted - 3/7/20</i>
                        </Card.Text>
                        <AccordionCollapse eventKey="open">
                        <Card.Text>
                            <p>
                                I graduated from the University of Washington in August 2016. I started my career at GE Healthcare where,
                                under the mentorship of a great Software Architect, I grew into the role of DevOps engineer. During my time at
                                GE I learned valuable skills in scripting, C#, Java, Python, Jenkins, and Batch.
                            </p>
                            <p>
                                After spending a year rebuilding the entire monolith infrastructure at GE into a microservice architecture, I had
                                outgrown my role and started applying for positions and landed at Microsoft working in the Windows Search Team.
                                It was on this team that I had my first exposure to Full Stack development, working with React, using Redux, Typescript, and C++.
                                On the Search team I developed prototypes for the current File Explorer, and created a troubleshooter for the Windows Search box.
                            </p>
                            <p className="bottom-p">
                                After the Windows Search team I took a position at Tableau where I returned to my DevOps roots and
                                realized Full Stack/Front End is where I would rather be. After helping Tableau Software migrate off
                                Python 2.7 the project wrapped successfully.
                            </p>
                        </Card.Text>
                        </AccordionCollapse>
                        <AccordionToggle as={Button} variant="link" eventKey="open" onClick={this.expanded}>
                            <p className="bottom-p" hidden={!this.state.expandedBlock} >Close</p>
                            <p className="bottom-p" hidden={this.state.expandedBlock} >More</p>
                        </AccordionToggle>
                    </div>
                </div>
            </div>
        );
    }
}