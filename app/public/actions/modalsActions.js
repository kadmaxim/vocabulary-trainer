import { SHOW_WORD_MODAL, SET_FETCHING_MODAL, SHOW_AUTH_MODAL } from './types';

export const showAuthModal = isShow => ({
  type: SHOW_AUTH_MODAL,
  payload: isShow
});

export const showWordModal = isShow => ({
  type: SHOW_WORD_MODAL,
  payload: isShow
});

export const fetchingModal = isFetch => ({
  type: SET_FETCHING_MODAL,
  payload: isFetch
});
