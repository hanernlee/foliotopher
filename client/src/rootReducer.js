import { combineReducers } from 'redux';

import NavigationReducer from './navigation/reducer_navigation';
import HamburgerReducer from './hamburger/reducer_hamburger';
import FirebaseReducer from './firebase/reducer_firebase.js'
import RouteReducer from './routes/reducer_routes.js'
import ContactReducer from './contact/reducer_contact.js'

const rootReducer = combineReducers({
  navigationLinks: NavigationReducer,
  navigationState: HamburgerReducer,
  worksList : FirebaseReducer,
  currentRoute: RouteReducer,
  contactLinks: ContactReducer
});

export default rootReducer;
