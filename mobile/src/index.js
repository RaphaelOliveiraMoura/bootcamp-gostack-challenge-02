import React from 'react';
import { StatusBar } from 'react-native';

import createRouter from './routes';

// import App from '~/App';

export default function Index() {
  const Routes = createRouter(true);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Routes />
    </>
  );
}
