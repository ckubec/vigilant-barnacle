import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Card, Container, Row, CardColumns} from "react-bootstrap";
import skillImage from "../img/010-checklist.svg";
import './skills.css';
import './card.scss';


export class Skills extends React.Component {
    render() {
        const header = {
            borderBottom: "medium outset gray"
        };

        const gutter = {
            marginRight: "0.5rem"
        };

        return(
        <Card className="lrgCard" id="Skills">
            <Card.Header className="text-justify" style={header} as="h3">
                <Container>
                    <Row style={gutter}>
                        <img className="img-fluid" style={gutter} src={skillImage} width={40} color={"white"} alt={"skills section"} />
                        <div>Skills</div>
                    </Row>
                </Container>
            </Card.Header>

            <Card.Body className="container-fluid">
                {getSkills()}
            </Card.Body>
        </Card>
        );
    }

}

let skillsTree = [ "React", "Python", "Javascript", "Typescript", "Java", "C++", "C"/*, "Jenkins"*/];

function getSkills() {
    let built = skillsTree.map(skill => skillBuild(skill));


    const columnstyle ={
        //height: "75%",
        //columnCount: 4,
        //gridAutoColumns: "100px",
        //display: "grid"
        //marginBottom: "0px",
    }

    return (
        <CardColumns className="" style={columnstyle}>
            {built}
        </CardColumns>
    );
}

const cardStyle ={
    marginBottom: "0px",
    backgroundColor: "black",
    //maxHeight: "1em",
    //gridAutoColumns: "100px",
    //display: "grid"
}

const listStyle = {
    textAlign: "center" as 'center',
    color: "white",
    //maxHeight: "2em",
    marginBottom: "0px",
    //display: "block",
    //position: "relative" as 'relative',
    overflow: "hidden",
    textOverflow: "hidden",
    whiteSpace: "nowrap" as 'nowrap',
    fontSize: "1rem"

};

const imageStyle = {
    backgroundColor: "black",
    //position: "relative" as 'relative',
    overflow: "hidden",
    display: "block"
}

function skillBuild(skill: string) {
    return (
        <Card className="p-3" style={cardStyle}>
            <Card className="rounded-circle" style={imageStyle}>
                <Card.Img className="d-flex"  src={require("../img/skills/"+ skill +".svg")} alt="Card image" />
            </Card>

            <Card.Text style={listStyle} color={"white"} >
            {skill}
            </Card.Text>
        </Card>
    );
}