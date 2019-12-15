import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    if (!payload) return;

    const { id } = payload;

    const response = yield call(api.get, `/students/${id}`);

    if (response.data) {
      yield put(signInSuccess(response.data));
    } else {
      Alert.alert('Falha na autenticação', 'Usuário inválido');
    }
  } catch (error) {
    Alert.alert(
      'Falha na autenticação',
      'Verifique sua conexaão com a internet'
    );
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
