import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page not found!</h2>
      <img className="logo" src="/img/cat.jpg"/>
      <p>
        <Link to="/">Go back to the main page</Link>
      </p>
    </div>
);

export default NotFoundPage;
