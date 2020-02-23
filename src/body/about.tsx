import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {AccordionCollapse, AccordionToggle, Button, Card, /*AccordionCollapse,*/ Container, Row} from "react-bootstrap";
// import image from "../img/About.jpeg";
import aboutImage from "../img/about-icon.svg";
import './card.scss';


export class About extends React.Component {
    render() {
        const gutter = {
            marginRight: "0.5rem",
            textAlign: "center" as "center",
            //maxWidth: "40px",
            maxHeight: "40px"
        };

        return (
            <div className="lrgCard" id="About">
                <Card.Header className="" as={"h3"}>
                    <Container>
                        <Row id="card-title-p">
                            <img className="img-fluid" src={aboutImage} style={gutter} width={40} color={"white"} alt={"about section"}/>
                            <div id="card-title">About Me</div>
                        </Row>
                    </Container>
                </Card.Header>

                <Card.Body>
                    {/*<AccordionCollapse eventKey="open"><Card.Img src={image}></Card.Img></AccordionCollapse>*/}
                    <Card.Text>
                        Hi my name is Chris, a Full Stack Software Engineer located in Seattle, Washington...
                        This site is still under construction, comeback soon.  <i>Posted - 2/21/20</i>
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