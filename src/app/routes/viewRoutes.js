import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './../views/Layout';
import NotFoundPage from './../views/NotFound';
import IndexPage from './../views/Index';

const componentRoutes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default componentRoutes;
