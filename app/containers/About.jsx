import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const About = () => {
  return (
    <div className={cx('about')}>
      <h1 className={cx('header')}>About Aroma</h1>
      <div className={cx('description')}>
        <p>Aroma is a peer2peer massage on demand platform.<br />
          We connect certified massage professionals with people looking to receive massage in the comfort of their own home.
        </p>
      </div>
      <div className={cx('contribute')}>
        <p>Try us today! Find your perfect masseur!
        </p>
      </div>
    </div>
  );
};

export default About;
