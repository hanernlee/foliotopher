export const TOGGLE_NAVIGATION = 'toggle_navigation';

export function toggleNavigation(clicked) {
  return {
    type: TOGGLE_NAVIGATION,
    payload: clicked
  };
};
