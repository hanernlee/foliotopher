import { combineReducers } from 'redux';

import NavigationReducer from './navigation/reducer_navigation';
import HamburgerReducer from './hamburger/reducer_hamburger';

const rootReducer = combineReducers({
  navigationLinks: NavigationReducer,
  navigationState: HamburgerReducer
});

export default rootReducer;
