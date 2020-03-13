import React from 'react';
import {Card, Container, Row, Col} from "react-bootstrap";
import './style/skills.scss';
import {SectionIcons, SmallIcons} from "../features/iconmanager";


export function Skills() {
    return(
        <div className="background" id="Skills">
            <div className="lrgCard">
                <Container className="title-bar">
                    <Row id="card-title-p" >
                        {SectionIcons("Skills")}
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

const listStyle = {
    textAlign: "center" as 'center',
    fontSize: ".75rem"
};

function SkillBuild(skill: string) {
    return (
        <Col xs={4} sm={4} md={2} key={skill}>
            <Card className="img-back">
                {SmallIcons(skill)}
            </Card>

            <Card.Text style={listStyle} >
            {skill}
            </Card.Text>
        </Col>
    );
}