import React, { Component } from 'react';
import './stockSection.css';

import happyGirl from '../../assets/images/happy_girl.png';
import dresses from '../../assets/images/dresses.png';
import sendBtn from '../../assets/images/60525.png';

import { Grid, Row, Col } from 'react-bootstrap';
import { Parallax, Background } from 'react-parallax';

class StockSection extends Component {
    render(){
        return(           
            <div className="container spec-margin-top no-padding">
                <div className="toys-text">
                    Узнайте больше о MEGA
                </div>
                <Grid>
                    <Row className="show-grid spec-margin-bottom stock-section-container">
                        <Col sm={4} className="subscribe-block">                     
                            <div className="subscribe-block-inner">
                                <Col sm={12} className="subscribe-header">
                                    <div>УЗНАВАЙТЕ ПЕРВЫМИ</div>
                                </Col>
                                <Col sm={12} className="subscribe-body">
                                    <div className="subscribe-body-h">
                                        ПОДПИШИТЕСЬ И ПОЛУЧИТЕ
                                    </div>
                                    <div className="subscribe-body-b">
                                        СКИДКУ 25%
                                    </div>
                                    <div className="subscribe-body-f">
                                        1 ТОВАР НА ВАШ ВЫБОР 
                                        + БЕСПЛАТНАЯ ДОСТАВКА
                                    </div>                              
                                </Col>
                                <Col sm={12} className="subscribe-footer">
                                    <div>ЗАРЕГИСТРИРОВАТЬСЯ</div>
                                </Col>
                            </div>                            
                        </Col>
                        <Col sm={8} className="brand-commercial no-padding-r">
                            <Parallax strength={200}>
                                <Background>
                                    <img src={dresses} alt="dresses" />   
                                </Background>
                                <div className="brand-commercial-block">
                                    <img src={happyGirl} className="happy-girl" alt="happy girl"/>
                                    <div className="brand-commercial-block-inner">
                                        <Col sm={12} className="brand-commercial-description">
                                            Мы усердно работаем, чтобы сделать раздел еще лучше! Оставьте свою электронную почту, и мы сообщим о запуске новых акций.
                                        </Col>
                                        <Col sm={12}>
                                            <div>
                                                <input type="text" className="input-primary" placeholder="Электронная почта" />
                                                <img src={sendBtn} className="send-btn" alt="send button" />
                                            </div>
                                        </Col>
                                    </div>
                                </div>
                            </Parallax>
                        </Col>
                    </Row>
                </Grid>
            </div>
            
        );
    }
}

export default StockSection;