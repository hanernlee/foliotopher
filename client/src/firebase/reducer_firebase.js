import { FETCH_WORKS } from './actionTypes';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_WORKS:
      return action.payload;
    default:
      return state;
  }
}
