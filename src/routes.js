import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import EnrolmentController from './app/controllers/EnrolmentController';

import SessionValidator from './app/validators/SessionValidator';
import StudentValidator from './app/validators/StudentValidator';
import PlanValidator from './app/validators/PlanValidator';
import EnrolmentValidator from './app/validators/EnrolmentValidator';

const routes = new Router();

/** Session */
routes.post('/sessions', SessionValidator.store, SessionController.store);

routes.use(authMiddleware);

/** Student */
routes.get('/students', StudentController.index);
routes.post('/students', StudentValidator.store, StudentController.store);
routes.put('/students/:id', StudentValidator.update, StudentController.update);

/** Plan */
routes.get('/plans', PlanController.index);
routes.post('/plans', PlanValidator.store, PlanController.store);
routes.put('/plans/:id', PlanValidator.update, PlanController.update);
routes.delete('/plans/:id', PlanValidator.delete, PlanController.delete);

/** Enrolment */
routes.get('/enrolments', EnrolmentController.index);
routes.post('/enrolments', EnrolmentValidator.store, EnrolmentController.store);
routes.put(
  '/enrolments/:id',
  EnrolmentValidator.update,
  EnrolmentController.update
);
routes.delete(
  '/enrolments/:id',
  EnrolmentValidator.delete,
  EnrolmentController.delete
);

export default routes;
