import React, { Component } from 'react';
import Page from '../pages/Page';
import ProfileContainer from '../containers/Profile';

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
                <ProfileContainer {...this.props} />
            </Page>
        );
    }
}

export default About;
