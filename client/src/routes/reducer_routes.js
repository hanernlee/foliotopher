import { GET_ROUTE } from './actionTypes';

export default function(state = null, action) {
  switch (action.type) {
    case GET_ROUTE:
      return action.payload;
    default:
      return state;
  }
}
