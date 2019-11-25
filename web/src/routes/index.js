import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';

import ListStudents from '~/pages/Students';
import FormStudents from '~/pages/Students/Form';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/students" exact component={ListStudents} isPrivate />
      <Route path="/students/create" component={FormStudents} isPrivate />
      <Route path="/students/:id" component={FormStudents} isPrivate />
    </Switch>
  );
}
