import React, { Component } from 'react';
import './contactUsPage.css';

import { Map, Marker, MarkerLayout } from 'yandex-map-react';

import points from './data';

import megaMarker from '../../assets/images/mega_marker.png';

class ContactUsPage extends Component {
    render(){
        const markerStyles = {
            width: '40px',
            height: '40px',
            overflow: 'hidden',
            border: '1px solid orange',
            background: '#FFF',
            borderRadius: '50%'
        };
        const mapState = {
            controls: ['default']
        };
        return(
            <div className="container">
            <Map onAPIAvailable={function () {}} width={'100%'} state={mapState} center={[56.838607, 60.605514]} zoom={10}>
                {points.map(([lat, lon], i) =>  (
                    <Marker key={'marker_' + i} lat={lat} lon={lon}>
                        <MarkerLayout>
                            <div style={markerStyles}>
                                <img src={megaMarker} alt="Mega marker" />
                            </div>
                        </MarkerLayout>
                    </Marker>
                ))}
            </Map>
            </div>
        );
    }
}

export default ContactUsPage;