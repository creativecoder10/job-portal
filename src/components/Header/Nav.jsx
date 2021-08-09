import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import classNames from './Nav.module.css';

const Nav = () => {
  const { firstName, lastName } = useSelector((state) => state.worker);

  return (
    <nav className={classNames.navBar}>
      <div className={classNames.navSection}>
        <div className={classNames.navSectionItem}>
          <Link to="/" className={classNames.linkNoStyle}>
            <span className={classNames.title}>
              Swipe Jobs
            </span>
          </Link>
        </div>
        <div className={classNames.navSectionItem}>
          <Link
            to="/"
            className={classNames.linkNoStyle}
          >
            <span className={classNames.navIcon}>
              <i className="fas fa-user" />
              {`${firstName} ${lastName}`}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
