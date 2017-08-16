import React, { Component } from 'react';
import './landingPage.css';

import mountain from '../../assets/images/mountain.jpg';
//import tets1 from './assets/images/tets1.jpg';

import { Parallax, Background } from 'react-parallax';
import { Grid, Row, Col } from 'react-bootstrap';

class LandingPage extends Component {
    render(){
        return(
            <Parallax strength={650}>
                <Background>
                    <img src={mountain} />   
                </Background>
                <div className="container">
                    <Grid>
                        <Row className="show-grid">
                            <Col sm={6} className="col-1"></Col>
                            <Col sm={6} className="col-2"></Col>
                        </Row>
                        <Row className="show-grid">
                            <Col sm={12} className="col-3"></Col>
                        </Row>
                        <Row className="show-grid">
                            <Col sm={4} className="col-4"></Col>
                            <Col sm={4} className="col-5"></Col>
                            <Col sm={4} className="col-6"></Col>
                        </Row>
                    </Grid>
                </div>
            </Parallax>
        );
    }
}

export default LandingPage;