import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Row, Card} from "react-bootstrap";

// const background = {
//     overflow: "scroll",
//     backgroundColor: "rgba(2,66,135,0.87)",
//     size: "14px",
//     height: "10000px",
// };

let items = ["About", "Skills", "Projects", "Connect"];

export class Body extends React.Component {
    render() {
        let things = items.map(item => Page(item));
        return (
                //<Container style={background}>
                <>
                    {things}
                </>
                //</Container>
        );
    }
}

function Page(name:string) {
    const cardStyle = {
        margin: "20px 20px 20px"
    };

    return (
        <Card id={name} style={cardStyle}>
            <Row >
                <Col>
                    <h5>{name}</h5>
                    <br color="black" />
                    <p>Well hello girl</p>
                </Col>
            </Row>
        </Card>
    );
}
