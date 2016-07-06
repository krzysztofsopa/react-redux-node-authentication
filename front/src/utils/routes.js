import React from 'react'
import { Route, IndexRoute } from 'react-router'
import LoginContainer from '../modules/login/components/login-container'
import UserContainer from '../modules/user/components/user-container'
import PaymentContainer from '../modules/payment/components/payment-container'
import DashboardContainer from '../modules/dashboard/components/dashboard-container'
import Welcome from '../modules/register/components/welcome'
import RegisterContainer from '../modules/register/components/register-container'
import { RouteHandler } from 'react-router'
import requireAuth from './require-auth';

export default (
  <Route>
    <Route path="/" component={Welcome} />
    <Route path="/register" component={RegisterContainer} />
    <Route path="/login" component={LoginContainer} />
    <Route component={DashboardContainer} onEnter={requireAuth}>
       <Route path='user' component={UserContainer} />
       <Route path='payment' component={PaymentContainer} />
     </Route>
  </Route>
);
