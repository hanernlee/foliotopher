import { TOGGLE_NAVIGATION } from './actionTypes';

export default function(state = null, action) {
  switch (action.type) {
    case TOGGLE_NAVIGATION:
      return action.payload;
    default:
      return state;
  }
}
