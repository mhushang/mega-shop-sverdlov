import React, { Component } from 'react';
import './landingPage.css';

import GenderSelector from '../genderSelector/genderSelector';
import LandingCarousel from '../landingCarousel/landingCarousel';
import NewProducts from '../newProducts/newProducts';
import ToySection from '../toySection/toySection';
import StockSection from '../stockSection/stockSection';

class LandingPage extends Component {
    render(){
        return(
            <div>
                <GenderSelector />
                <LandingCarousel />
                <NewProducts />
                <ToySection />
                <StockSection />
            </div>
        );
    }
}

export default LandingPage;