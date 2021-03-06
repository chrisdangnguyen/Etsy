import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS ='RECEIVE_USER_ERRORS';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user: user
});

const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
})

export const fetchUser = userId => dispatch => (
  UserAPIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)),
      errors => (dispatch(receiveUserErrors(errors.responseJSON)))
    )
);


export const updateUser = user => dispatch => (
  UserAPIUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user)),
      errors => (dispatch(receiveUserErrors(errors.responseJSON)))
    )
);  

