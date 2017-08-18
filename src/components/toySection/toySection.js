import React, { Component } from 'react';
import './toySection.css';

import planeMain from '../../assets/images/plane_main.png';
import spiderMan from '../../assets/images/spider_man.jpg';
import cock from '../../assets/images/cock.jpg';
import doll from '../../assets/images/doll.jpg';
import bear from '../../assets/images/bear.jpg';
import forKids from '../../assets/images/for_kids.jpg';
import robot from '../../assets/images/robot.jpg';
//import like from '../../assets/images/like.png';

import { Grid, Row, Col } from 'react-bootstrap';
import { Parallax, Background } from 'react-parallax';

class ToySection extends Component {
    render(){
        return(
            <Parallax strength={500}>
                <Background>
                    <img src={planeMain} alt="planeMain" />   
                </Background>
                <div className="container spec-margin-top no-padding">
                    <div className="toys-text">
                        Игрушки
                    </div>

                    <Grid className="no-padding">
                        <Row className="show-grid spec-margin-bottom toys-container">
                            <Col sm={4}>
                                <img src={spiderMan} alt="spider man"/>
                            </Col>
                            <Col sm={4}>
                                <img src={cock} alt="cock"/>
                            </Col>
                            <Col sm={4}>
                                <img src={doll} alt="a doll"/>
                            </Col>
                        </Row>
                        <Row className="show-grid spec-margin-bottom toys-container">
                            <Col sm={4}>
                                <img src={bear} alt="bear"/>
                            </Col>
                            <Col sm={4}>
                                <img src={forKids} alt="something strange"/>
                            </Col>
                            <Col sm={4}>
                                <img src={robot} alt="robot"/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </Parallax>
        );
    }
}

export default ToySection;