import React, { Component } from 'react';
import './genderSelector.css';

import clouds from '../../assets/images/clouds.png';
import female from '../../assets/images/female.png';
import male from '../../assets/images/male.png';

import { Parallax, Background } from 'react-parallax';
import { Grid, Row, Col } from 'react-bootstrap';

class GenderSelector extends Component{
    render(){
        return(
            <Parallax strength={-350}>
                <Background>
                    <img className="gender-choose-bg" alt="clouds" src={clouds} />   
                </Background>
                <div className="container">
                    <Grid>
                        <Row className="show-grid gender-choose">                   
                            <Col sm={6} className="female">
                                <img alt="female_gender_form" src={female} />
                                <div className="female_label">
                                    <div className="custom">Для</div> 
                                    <div>Женщин</div> 
                                </div>
                            </Col>
                            <Col sm={6} className="male">
                                <img alt="male_gender_form.jpg" src={male}/>
                                <div className="male_label">
                                    <div className="custom">Для</div> 
                                    <div>Мужчин</div> 
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </Parallax>
        );
    }
}

export default GenderSelector;

