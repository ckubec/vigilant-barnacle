import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {AccordionToggle, Button, Card, AccordionCollapse, Accordion} from "react-bootstrap";
import image from "./img/About.jpeg";


export class Body extends React.Component {
    render() {
        //let things = items.map(item => Page(item));
        return (
                <div>
                    {Page()}
                </div>
        );
    }
}

function Page() {
    return (
        <Accordion>
            {About()}

        </Accordion>
    );
}

function About() {
    const cardStyle = {
        margin: "20px 20px 20px",
        color: "#ffffff",
        backgroundColor: "black",
        borderBottom: "3px solid black",
        border: "3px solid midnightblue",
        textShadow: "160"
    };

    const header = {
        borderBottom: "medium outset gray"
    };

    return (
        <Card id="About" style={cardStyle}>
            <Card.Header style={header} as="h5">About</Card.Header>
            <Card.Body>
                {/*<AccordionCollapse eventKey="open"><Card.Img src={image}></Card.Img></AccordionCollapse>*/}
                <Card.Text>
                    Hi my name is Chris, a Full Stack Software Engineer located in Seattle, Washington...
                </Card.Text>
                <AccordionCollapse eventKey="open">
                    <Card.Text>
                        I'm originally from Kent, WA and went to University of Washington.

                        After graduating in 2016 I ended up at General Electric Healthcare in the Life Science space working infrastructure and DevOps.

                        Spending a year at GE I realized I had outgrown my role



                    </Card.Text>
                </AccordionCollapse>
                <AccordionToggle as={Button} variant="link" eventKey="open">more</AccordionToggle>
            </Card.Body>
        </Card>
    );
}
