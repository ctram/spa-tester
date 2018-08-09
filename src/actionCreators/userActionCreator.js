import actions from '../actions/user';

function setCurrentUser(user) {
  debugger
  return {
    type: actions.SET_CURRENT_USER,
    currentUser: user
  };
}

export default {
  setCurrentUser
};
