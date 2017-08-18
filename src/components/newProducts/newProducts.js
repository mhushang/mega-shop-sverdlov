import React, { Component } from 'react';
import './newProducts.css';

import smile from '../../assets/images/smile.jpg';
import guy from '../../assets/images/guy.jpg';
import kid from '../../assets/images/kid.jpg';
import like from '../../assets/images/like.png';

import { Grid, Row, Col } from 'react-bootstrap';

class NewProducts extends Component {
    render(){
        return(
            <div className="container spec-margin-top bottom-border">
                <div className="new-products-text">
                    НОВЫЕ ПОСТУПЛЕНИЯ
                </div>
                <Grid>
                    <Row className="show-grid spec-margin-bottom new-products-container">
                        <Col sm={4}>
                            <Col className="no-padding text-left">
                                <img src={like} alt="like" className="like"/>
                            </Col>
                            <Col sm={12} className="no-padding text-center">
                                <img src={smile} alt="girl with smile"/>
                            </Col>
                            <Col sm={12} className="no-padding text-center product-label">
                                <div>Блузка с оборками</div>
                                <div>250 Руб</div>
                            </Col>
                        </Col>
                        <Col sm={4}>
                            <Col className="no-padding text-left">
                                <img src={like} alt="like" className="like"/>
                            </Col>
                            <Col sm={12} className="no-padding text-center">
                                <img src={guy} alt="some guy"/>
                            </Col>
                            <Col sm={12} className="no-padding text-center product-label">
                                <div>Бомбер с рисунком</div>
                                <div>300 Руб</div>
                            </Col>
                        </Col>
                        <Col sm={4}>
                            <Col className="no-padding text-left">
                                <img src={like} alt="like" className="like"/>
                            </Col>
                            <Col sm={12} className="no-padding text-center">
                                <img src={kid} alt="hip-hop kid"/>
                            </Col>
                            <Col sm={12} className="no-padding text-center product-label">
                                <div>2 футболки с длинным рукавом</div>
                                <div>200 Руб</div>
                            </Col>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default NewProducts;