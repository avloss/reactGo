import React, { Component } from 'react';
import Page from '../pages/Page';
import MapContainer from '../containers/Map';

class About extends Component {
    getMetaData() {
        return {
            title:  'Aroma - Thai Massage',
            meta: [{ name: 'description', content: 'Find your perfect Thai Masseur!' }],
            link: []
        };
    }

    render() {
        return (
            <Page {...this.getMetaData()}>
                <MapContainer {...this.props} />
            </Page>
        );
    }
}

export default About;
