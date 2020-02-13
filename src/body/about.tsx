import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {AccordionToggle, Button, Card, /*AccordionCollapse,*/ Container, Row} from "react-bootstrap";
// import image from "../img/About.jpeg";
import aboutImage from "../img/about-icon.svg";
import './card.scss';


export class About extends React.Component {
    render() {
        const header = {
            borderBottom: "medium outset gray",
            //fontSize: "large",

            //fontSize: "1.471em",
            //maxHeight: "40px"
        };

        const gutter = {
            marginRight: "0.5rem",
            // width: "10%",
            // maxWidth: "40px",
            // maxHeight: "40px"
        };

        return (
            <Card className="lrgCard" id="About">
                <Card.Header className="" style={header} as={"h3"}>
                    <Container>
                        <Row id="card-title-p">
                            <img className="img-fluid" src={aboutImage} style={gutter} width={40} color={"white"} alt={"about section"}></img>
                            <div id="card-title">About Me</div>
                        </Row>
                    </Container>
                </Card.Header>

                <Card.Body>
                    {/*<AccordionCollapse eventKey="open"><Card.Img src={image}></Card.Img></AccordionCollapse>*/}
                    <Card.Text>
                        Hi my name is Chris, a Full Stack Software Engineer located in Seattle, Washington...
                        This site is still under construction, comeback next week.  <i>Posted - 2/12/20</i>
                    </Card.Text>
                    {/*<AccordionCollapse eventKey="open">*/}
                    {/*<Card.Text>*/}
                    {/*    I'm originally from Kent, WA and went to University of Washington.*/}

                    {/*    After graduating in 2016 I ended up at General Electric Healthcare in the Life Science space working infrastructure and DevOps.*/}

                    {/*    Spending a year at GE I realized I had outgrown my role*/}


                    {/*</Card.Text>*/}
                    {/*</AccordionCollapse>*/}
                    <AccordionToggle as={Button} variant="link" eventKey="open">more</AccordionToggle>
                </Card.Body>
            </Card>
        );
    }
}