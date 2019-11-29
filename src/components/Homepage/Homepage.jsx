import React from 'react';
import Directory  from '../Directory/Directory.component';
import './Homepage.css.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to my Homepage</h1>
      <Directory />
    </div>
  );
};

export { Homepage };
