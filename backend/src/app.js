import 'dotenv/config';
import express from 'express';
import { resolve } from 'path';
import cors from 'cors';

import Youch from 'youch';
import * as Sentry from '@sentry/node';
import 'express-async-errors';

import '~/database';
import routes from '~/routes';
import sentryConfig from './config/sentry';

class App {
  constructor() {
    this.server = express();

    Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(cors({ exposedHeaders: 'total_pages' }));
    this.server.use(express.json());
    this.server.use(
      '/public',
      express.static(resolve(__dirname, '..', 'public'))
    );
  }

  exceptionHandler() {
    this.server.use(async (error, request, response, next) => {
      const errors = await new Youch(error, request).toJSON();
      return response.status(500).json(errors);
    });
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }
}

export default new App().server;
