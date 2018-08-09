import actions from '../actions/user';

const initialState = {
  currentUser: null
};

export default function user(state = initialState, action) {
  debugger
  switch (action.type) {
    case actions.SET_CURRENT_USER:
      return Object.assign({}, state, { currentUser: action.currentUser });
    default:
      return state;
  }
}
