import React, { Component } from 'react';
import './landingPage.css';

import GenderSelector from '../genderSelector/genderSelector';
import LandingCarousel from '../landingCarousel/landingCarousel';

import mountain from '../../assets/images/mountain.jpg';

import { Parallax, Background } from 'react-parallax';
import { Grid, Row, Col } from 'react-bootstrap';

class LandingPage extends Component {
    render(){
        return(
            <div>
                <GenderSelector />
                <LandingCarousel />
                <Parallax strength={200}>
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
            </div>
        );
    }
}

export default LandingPage;