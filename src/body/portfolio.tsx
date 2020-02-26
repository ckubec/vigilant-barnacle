import React from 'react';
import './card.scss';
import {Container, Row} from "react-bootstrap";
import portfolioImage from "../img/portfolio.svg";


export class Portfolio extends React.Component {
    render() {
        return (
            <div className="lrgCard" id="Portfolio">
                <Container className="title-bar">
                    <Row id="card-title-p" >
                        <img className="img-fluid" src={portfolioImage} width={40} color={"white"} alt={"portfolio section"} />
                        <h2 id="card-title">Portfolio</h2>
                    </Row>
                </Container>

                <div className="container-fluid">
                    <p>
                        Currently building portfolio to reflect current skill set. Please visit my LinkedIn/Github below
                        to see college projects. Also to see the source code for this site.
                    </p>
                </div>
            </div>
        );
    };
}