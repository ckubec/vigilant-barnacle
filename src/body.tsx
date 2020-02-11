import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {AccordionToggle, Button, Card, AccordionCollapse, Accordion} from "react-bootstrap";
import image from "./img/About.jpeg";
import aboutImage from "./img/030-candidate.svg";


export class Body extends React.Component {

    render() {
        const bodyStyle = {
            width: "75%",
            justifyContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "darkgray"
        };
        return (
                <div style={bodyStyle}>
                    {Page()}
                </div>
        );
    }
}

function Page() {
    return (
        <Accordion>
            {About()}
            {Skills()}
            {Blocks()}
            {Blocks()}
            {Blocks()}
            {Blocks()}
            {Blocks()}
            {Blocks()}
        </Accordion>
    );
}

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

function Skills() {
    return (
      <Card id="Skills" style={cardStyle}>
          <Card.Header style={header} as="h5">Skills</Card.Header>
          <Card.Body>
              <Card.Text>This is where the skills go </Card.Text>
          </Card.Body>
      </Card>
    );
}

function Blocks() {
    return (
        <Card id="block" style={cardStyle}>
            <Card.Header style={header} as="h5">Blocks</Card.Header>
            <Card.Body>
                <Card.Text>THis is where the info goes for my </Card.Text>
            </Card.Body>
        </Card>
    );
}

//TODO Add a card component that this can inherit from to retain style across body cards <about, skills,...etc>
function About() {
    return (
        <Card id="About" style={cardStyle}>
            <Card.Header className="text-justify" style={header} as="h2"><img className="img-fluid" src={aboutImage} width={40} color={"white"}></img> About Me</Card.Header>
            <Card.Body>
                {/*<AccordionCollapse eventKey="open"><Card.Img src={image}></Card.Img></AccordionCollapse>*/}
                <Card.Text>
                    Hi my name is Chris, a Full Stack Software Engineer located in Seattle, Washington...
                    This site is still under construction, comeback next week.  <i>Posted - 2/7/20</i>
                </Card.Text>
                {/*<AccordionCollapse eventKey="open">*/}
                    {/*<Card.Text>*/}
                    {/*    I'm originally from Kent, WA and went to University of Washington.*/}

                    {/*    After graduating in 2016 I ended up at General Electric Healthcare in the Life Science space working infrastructure and DevOps.*/}

                    {/*    Spending a year at GE I realized I had outgrown my role*/}



                    {/*</Card.Text>*/}
                {/*</AccordionCollapse>*/}
                {/*<AccordionToggle as={Button} variant="link" eventKey="open">more</AccordionToggle>*/}
            </Card.Body>
        </Card>
    );
}
