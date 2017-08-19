import { FETCH_WORKS } from './actionTypes';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_WORKS:
      return action.payload;
    default:
      return state;
  }
}
