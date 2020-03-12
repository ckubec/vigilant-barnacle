import React from 'react';
import {Card, Container, Row, Col} from "react-bootstrap";
import skillImage from "../img/icons/skills-icon.svg";
import './style/card.scss';
import './style/skills.scss';
import {IconManager} from "../img/skills/iconmanager";


export function Skills() {
    return(
        <div className="background" id="Skills">
            <div className="lrgCard">
                <Container className="title-bar">
                    <Row id="card-title-p" >
                        <img className="img-fluid" src={skillImage} width={40} alt={"skills section"} />
                        <h2 id="card-title">Skills</h2>
                    </Row>
                </Container>

                <div className="container-fluid">
                    {getSkills()}
                </div>
            </div>
        </div>
    );
}

let skillsTree = [ "React", "JavaScript", "Typescript", "HTML 5", "CSS 3", "Redux", "SASS", "GitHub", "Java" , "C Sharp", "C++", "C", "Python", "Android"];

function getSkills() {
    let built = skillsTree.map(skill => SkillBuild(skill));

    return (
        <Row className="deck" >
            {built}
        </Row>
    );
}

const cardStyle ={
    marginBottom: "0px",
};

const listStyle = {
    textAlign: "center" as 'center',
    marginBottom: "0px",
    overflow: "hidden",
    textOverflow: "hidden",
    whiteSpace: "nowrap" as 'nowrap',
    fontSize: ".75rem"
};

function SkillBuild(skill: string) {
    return (
        <Col xs={4} sm={4} md={2} key={skill} style={cardStyle}>
            <Card className="img-back">
                {IconManager(skill)}
            </Card>

            <Card.Text style={listStyle} >
            {skill}
            </Card.Text>
        </Col>
    );
}