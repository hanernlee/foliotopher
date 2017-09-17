import { FETCH_WORKS } from './actionTypes';
import _ from 'lodash';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_WORKS:
      return _.sortBy(action.payload, ['id']);
    default:
      return state;
  }
}
