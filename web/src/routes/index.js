import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';

import ListStudents from '~/pages/Students';
import FormStudents from '~/pages/Students/Form';

import ListPlans from '~/pages/Plans';
import FormPlans from '~/pages/Plans/Form';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" exact component={ListStudents} isPrivate />
      <Route path="/students/create" component={FormStudents} isPrivate />
      <Route path="/students/:id" component={FormStudents} isPrivate />

      <Route path="/plans" exact component={ListPlans} isPrivate />
      <Route path="/plans/create" component={FormPlans} isPrivate />
      <Route path="/plans/:id" component={FormPlans} isPrivate />
    </Switch>
  );
}
