import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';

import StudentsList from '~/pages/Students';
import StudentsForm from '~/pages/Students/Form';

import PlansList from '~/pages/Plans';
import PlansForm from '~/pages/Plans/Form';

import EnrolmentsList from '~/pages/Enrolments';
import EnrolmentsForm from '~/pages/Enrolments/Form';

import HelpOrders from '~/pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" exact component={StudentsList} isPrivate />
      <Route path="/students/create" component={StudentsForm} isPrivate />
      <Route path="/students/:id" component={StudentsForm} isPrivate />

      <Route path="/plans" exact component={PlansList} isPrivate />
      <Route path="/plans/create" component={PlansForm} isPrivate />
      <Route path="/plans/:id" component={PlansForm} isPrivate />

      <Route path="/enrolments" exact component={EnrolmentsList} isPrivate />
      <Route path="/enrolments/create" component={EnrolmentsForm} isPrivate />
      <Route path="/enrolments/:id" component={EnrolmentsForm} isPrivate />

      <Route path="/help-orders" component={HelpOrders} isPrivate />
    </Switch>
  );
}
