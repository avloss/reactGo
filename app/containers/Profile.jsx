import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/profile';
import { connect } from 'react-redux';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

class Profile extends Component {
  render() {
    return (
      <div>
        <h1 className={cx('header')}>This is user profile container!</h1>
        <h2 className={cx('email')}>and here's the user's email: {this.props.email}</h2>
      </div>
    );
  };
}

function mapStateToProps(state) {
    return {
        email: state.user.user_details.email
    };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(Profile);

