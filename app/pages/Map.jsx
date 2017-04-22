import React, { Component } from 'react';
import Page from '../pages/Page';
import MapContainer from '../containers/Map';

class About extends Component {
    getMetaData() {
        return {
            title:  'About | reactGo',
            meta: [{ name: 'description', content: 'A reactGo example of life' }],
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
