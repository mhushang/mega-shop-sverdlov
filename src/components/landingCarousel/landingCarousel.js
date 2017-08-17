import React, { Component } from 'react';
import './landingCarousel.css';

import { Carousel } from 'react-bootstrap';

import blackMan from '../../assets/images/black_man.png';
import girlInDark from '../../assets/images/girl_in_dark.png';
import boots from '../../assets/images/boots.png';

class LandingCarousel extends Component{
    render(){
        return(
            <div className="landing-carousel">
                <Carousel controls={false} className="landing-carousel-content">
                    <Carousel.Item className="landing-carousel-item goods">
                        <div className="item-text">
                            <div>Скидки</div>
                            <div className="percentage">70%</div>
                        </div>
                        <div className="item-content">
                            <div className="text-area">
                                <div>Сезон</div>
                                <div>переображений</div> 
                            </div>
                            <div className="button-content">
                                <button><span className="hover-effect">П О С М О Т Р Е Т Ь</span></button>
                            </div>
                        </div>
                        <img src={girlInDark} alt="girl in dark"/>
                    </Carousel.Item>
                    {/*<Carousel.Item className="landing-carousel-item back-to-school">
                        <div className="item-text">
                            <div>Скидки</div>
                            <div className="percentage">50%</div>
                        </div>
                        <div className="item-content">
                            <div className="text-area">
                                Снова в школу
                            </div>
                            <div className="button-content">
                                <button><span className="hover-effect">П О С М О Т Р Е Т Ь</span></button>
                            </div>
                        </div>
                        <img src={blackMan} alt="school boy"/>
                    </Carousel.Item>
                    <Carousel.Item className="landing-carousel-item snickers">
                        <div className="item-text">
                            <div>Скидки</div>
                            <div className="percentage">85%</div>
                        </div>
                        <div className="item-content">
                            <div className="text-area">
                                <div>Классические</div>
                                <div>кеды</div> 
                            </div>
                        <div className="button-content">
                            <button><span className="hover-effect">П О С М О Т Р Е Т Ь</span></button>
                        </div>
                        </div>
                        <img src={boots} alt="boots"/>
                    </Carousel.Item>*/}
                </Carousel>
            </div>
        );
    }
}

export default LandingCarousel;