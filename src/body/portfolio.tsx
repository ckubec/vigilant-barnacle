import React from 'react';
import './style/card.scss';
import {Container, Row} from "react-bootstrap";
import portfolioImage from "../img/icons/portfolio.svg";
import './style/portfolio.scss';


export class Portfolio extends React.Component {
    render() {
        return (
            <div className="background" id="Portfolio">
                <div className="lrgCard">
                    <Container className="title-bar">
                        <Row id="card-title-p" >
                            <img className="img-fluid" src={portfolioImage} width={40} color={"white"} alt={"portfolio section"} />
                            <h2 id="card-title">Portfolio</h2>
                        </Row>
                    </Container>

                    <div className="container-fluid" >
                        <p className="bottom-p">
                            I am currently building a portfolio to reflect my current skill set. Please visit my LinkedIn and Github below to see my old college projects.
                            Also please take a look at the code I wrote for this site. <a href="https://github.com/ckubec/vigilant-barnacle">Here</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    };
}