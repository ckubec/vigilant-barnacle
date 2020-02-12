import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Card, Container, Row, CardDeck} from "react-bootstrap";
import skillImage from "../img/010-checklist.svg";


export class Skills extends React.Component {
    render() {
        const cardStyle = {
            margin: "20px 20px 20px",
            color: "#ffffff",
            backgroundColor: "black",
            borderBottom: "3px solid black",
            border: "3px solid midnightblue",
            textShadow: "160",
            paddingBottom: "0"
        };

        const header = {
            borderBottom: "medium outset gray"
        };

        const gutter = {
            marginRight: "15px"
        };

        return(
        <Card id="Skills" style={cardStyle}>
            <Card.Header className="text-justify" style={header} as="h2">
                <Container>
                    <Row style={gutter}>
                        <img className="img-fluid" style={gutter} src={skillImage} width={40} color={"white"} alt={"skills section"} />
                        <div>Skills</div>
                    </Row>
                </Container>
            </Card.Header>

            <Card.Body>
                {getSkills()}
            </Card.Body>
        </Card>
        );
    }

}

let skillsTree = [ "React", "Python", "Javascript", "Typescript"/*, "Java", "C++", "C#", "Jenkins"*/];

function getSkills() {
    let built = skillsTree.map(skill => skillBuild(skill));

    return (
        <CardDeck>
            {built}
        </CardDeck>
    );
}

const listStyle = {
    textAlign: "center" as 'center',
    color: "Black",
};

function skillBuild(skill: string) {
    return (
        <Card style={listStyle}>
            <Card.Img src={require("../img/skills/"+ skill +".svg")} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title color={"black"} >
                    {skill}
                </Card.Title>
            </Card.ImgOverlay>
        </Card>
    );
}