import { GET_ROUTE } from './actionTypes';

export function getRoute(route) {
  return {
    type: GET_ROUTE,
    payload: route
  };
};
