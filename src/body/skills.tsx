import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Card, Container, Row, CardColumns, CardDeck, Col} from "react-bootstrap";
import skillImage from "../img/skills-icon.svg";
import './card.scss';


export class Skills extends React.Component {
    render() {
        const gutter = {
            marginRight: "0.5rem",
            maxWidth: "40px",
            maxHeight: "40px"
        };

        return(
        <div className="lrgCard" id="Skills">
            <Card.Header className="" as={"h3"}>
                <Container>
                    <Row id="card-title-p" >
                        <img className="img-fluid" style={gutter} src={skillImage} width={40} color={"white"} alt={"skills section"} />
                        <div id={"card-title"}>Skills</div>
                    </Row>
                </Container>
            </Card.Header>

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

    const columnstyle ={
        //height: "75%",
        //columnCount: 4,
        //gridAutoColumns: "100px",
        //display: "grid"
        //marginBottom: "0px",
    };

    return (
        <Row className="deck" style={columnstyle}>
            {built}
        </Row>
    );
}

const cardStyle ={
    marginBottom: "0px",
    backgroundColor: "black",
    //maxHeight: "1em",
    //gridAutoColumns: "100px",
    //display: "grid"
};

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
};

function skillBuild(skill: string) {
    return (
        <Col xs={6} sm={4} md={3} key={skill} style={cardStyle}>
            {/*<Card className="rounded-circle" style={imageStyle}>*/}
                <Card>
                    <Card.Img className="d-flex"  src={require("../img/skills/"+ skill +".svg")} alt="Card image" />
                </Card>
            {/*</Card>*/}

            <Card.Text style={listStyle} color={"white"} >
            {skill}
            </Card.Text>
        </Col>
    );
}