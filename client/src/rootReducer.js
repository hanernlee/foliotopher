import { combineReducers } from 'redux';

import NavigationReducer from './navigation/reducer_navigation';
import HamburgerReducer from './hamburger/reducer_hamburger';
import FirebaseReducer from './firebase/reducer_firebase.js'

const rootReducer = combineReducers({
  navigationLinks: NavigationReducer,
  navigationState: HamburgerReducer,
  worksList : FirebaseReducer
});

export default rootReducer;
