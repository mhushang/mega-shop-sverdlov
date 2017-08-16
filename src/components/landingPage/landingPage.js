import React, { Component } from 'react';
import './landingPage.css';

import mountain from '../../assets/images/mountain.jpg';
import tets1 from '../../assets/images/tets1.jpg';
import test3 from '../../assets/images/test3.jpg';
import female from '../../assets/images/female_gender_form.jpg';
import male from '../../assets/images/male_gender_form.jpg';

import { Parallax, Background } from 'react-parallax';
import { Grid, Row, Col } from 'react-bootstrap';

class LandingPage extends Component {
    render(){
        return(
            <div>
                <Parallax strength={650}>
                    <Background>
                        <img src={test3} />   
                    </Background>
                    <div className="container">
                        <Grid>
                            <Row className="show-grid gender-choose">
                                <Col sm={6} className="female">
                                    <img alt="female_gender_form" src={female} />
                                </Col>
                                <Col sm={6} className="male">
                                    <img alt="male_gender_form.jpg" src={male}/>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </Parallax>
                <Parallax strength={-200}>
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