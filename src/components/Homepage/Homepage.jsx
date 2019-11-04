import React from 'react';
import './Homepage.css.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Title One</h1>
            <span className="subtitle">Sub-Title One</span>
          </div>
          <div className="content">
            <h1 className="title">Title Two</h1>
            <span className="subtitle">Sub-Title One</span>
          </div>
          <div className="content">
            <h1 className="title">Title Three</h1>
            <span className="subtitle">Sub-Title One</span>
          </div>
          <div className="content">
            <h1 className="title">Title Four</h1>
            <span className="subtitle">Sub-Title One</span>
          </div>
          <div className="content">
            <h1 className="title">Title Five</h1>
            <span className="subtitle">Sub-Title One</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Homepage };
