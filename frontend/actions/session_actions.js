import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const logIn = user => dispatch => (
  SessionApiUtil.signIn(user).then(
    (user) => {
      dispatch(receiveCurrentUser(user));
      dispatch(receiveErrors({}));
    },
    (error) => dispatch(receiveErrors(error.responseJSON))
  )
);

export const logOut = () => dispatch => (
  SessionApiUtil.signOut().then(() => dispatch(receiveCurrentUser(null)))
);

export const signUp = user => dispatch => (
  SessionApiUtil.signUp(user).then(
    (user) => {
      dispatch(receiveCurrentUser(user));
      dispatch(receiveErrors({}));
    },
    (error) => dispatch(receiveErrors(error.responseJSON))
  )
);
