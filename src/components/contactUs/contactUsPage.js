import React, { Component } from 'react';
import './contactUsPage.css';

import { YMaps, Map, ObjectManager } from 'react-yandex-maps';

class ContactUsPage extends Component {
    render(){
        const mapState = { center: [56.838026, 60.597115], zoom: 10 };
        return(
            <div className="container">
                <YMaps>
                    <Map state={mapState} width={800} height={350}>
                        <ObjectManager 
                            options={{
                                clusterize: true,
                                gridSize: 32,
                            }}
                            objects={{
                                preset: 'islands#greenDotIcon',
                            }}
                            clusters={{
                                preset: 'islands#greenClusterIcons',
                            }}
                        />
                    </Map>
                </YMaps>
            </div>
        );
    }
}

export default ContactUsPage;