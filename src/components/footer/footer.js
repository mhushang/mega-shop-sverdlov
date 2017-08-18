import React, { Component } from 'react';
import './footer.css';
import instagram from '../../assets/images/instagram.png';
import vkontakte from '../../assets/images/vk.png';

import { Grid, Row, Col } from 'react-bootstrap';


class Footer extends Component {
  render() {
    return (
        <div className="footer">
            <div className="footer-first-level text-center">
              <div className="mega-logo">M E G A</div>
              kher kher kher kher kher kher kher kher kher
            </div>
            <div className="footer-second-level">
              <Grid>
                <Row className="show-grid">
                  <Col sm={4}>
                    <Col sm={12} className="label-head">КУПИТЬ</Col>
                    <Col sm={12} className="label-body">Для Женщин</Col>
                    <Col sm={12} className="label-body">Для Мужчин</Col>
                    <Col sm={12} className="label-body">Для Детей</Col>
                    <Col sm={12} className="label-body">Игрушки</Col>
                  </Col>
                  <Col sm={4}>
                    <Col sm={12} className="label-head">ИНФОРМАЦИЯ О КОМПАНИИ</Col>
                    <Col sm={12} className="label-body">О MEGA</Col>
                    <Col sm={12} className="label-body">Для Инвесторов</Col>
                  </Col>
                <Col sm={4}>
                  <Col sm={12} className="label-head">ПОМОЩЬ</Col>
                  <Col sm={12} className="label-body">Найти Магазин</Col>
                  <Col sm={12} className="label-body">Контакты</Col>
                </Col>
              </Row>
              <Row className="show-grid text-center spec-margin-top">
                <img src={instagram} className="vkontakte" alt="vkontakte logo" />
                <img src={vkontakte} className="instagram" alt="instagram logo"/>
              </Row>
              <Row className="show-grid text-center">
                <div className="mega-logo">M E G A</div>
              </Row>
            </Grid>
          </div>
        </div>
    );
  }
}

export default Footer;
