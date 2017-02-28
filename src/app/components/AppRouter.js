import React from 'react';
import { Router, browserHistory } from 'react-router';
import viewRoutes from '../routes/viewRoutes';

const AppRouter = () => (
      <Router history={browserHistory} routes={viewRoutes} onUpdate={() => window.scrollTo(0, 0)}/>
);

export default AppRouter;
