import React from 'react';
import {Card, Container, Row, Col} from "react-bootstrap";
import skillImage from "../img/icons/skills-icon.svg";
import './style/card.scss';
import './style/skills.scss';


export class Skills extends React.Component {
    render() {
        return(
        <div className="lrgCard" id="Skills">
            <Container className="title-bar">
                <Row id="card-title-p" >
                    <img className="img-fluid" src={skillImage} width={40} color={"white"} alt={"skills section"} />
                    <h2 id="card-title">Skills</h2>
                </Row>
            </Container>

            <div className="container-fluid">
                {getSkills()}
            </div>
        </div>
        );
    }

}

let skillsTree = [ "React", "Python", "Javascript", "Typescript", "Java" /*, "C++", "C"/*, "Jenkins"*/];

function getSkills() {
    let built = skillsTree.map(skill => skillBuild(skill));

    return (
        <Row className="deck" >
            {built}
        </Row>
    );
}

const cardStyle ={
    marginBottom: "0px",
    backgroundColor: "black",
};

const listStyle = {
    textAlign: "center" as 'center',
    color: "white",
    marginBottom: "0px",
    overflow: "hidden",
    textOverflow: "hidden",
    whiteSpace: "nowrap" as 'nowrap',
    fontSize: "1rem"
};

function skillBuild(skill: string) {
    return (
        <Col xs={6} sm={4} md={3} key={skill} style={cardStyle}>
            <Card>
                <Card.Img className="d-flex"  src={require("../img/skills/"+ skill +".svg")} alt="Card image" />
            </Card>

            <Card.Text style={listStyle} color={"white"} >
            {skill}
            </Card.Text>
        </Col>
    );
}