import i18n from '@app/translations/i18n';
import { put, takeLatest } from 'redux-saga/effects';

export const actionTypes = {
  SetLang: 'Locale/SetLang',
  SetLangVi: 'Locale/SetLangVi',
  SetLangEN: 'Locale/SetLangEN',
  SetRerenderProvider: 'Rerender/SetRerenderProvider',
};

const initialState = {};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SetLang: {
      const { language } = action.payload;
      if (language !== localStorage.getItem('i18nextLng')) {
        i18n.changeLanguage(language);
      }
      return state;
    }
    default:
      return state;
  }
};

export const actions = {
  setLang: (language) => ({ type: actionTypes.SetLang, payload: { language } }),
  rerenderProvider: () => ({ type: actionTypes.SetRerenderProvider }),
};

export function* saga() {
  yield takeLatest(actionTypes.SetLang, function* localeSaga() {
    yield put(actions.rerenderProvider());
  });
}
