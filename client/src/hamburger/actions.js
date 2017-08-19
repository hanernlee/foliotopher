import { TOGGLE_NAVIGATION } from './actionTypes';

export function toggleNavigation(clicked) {
  return {
    type: TOGGLE_NAVIGATION,
    payload: clicked
  };
};
