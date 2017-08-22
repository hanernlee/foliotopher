import firebase from 'firebase';
import { FIREBASE_CONFIG } from './config.js';
import { FETCH_WORKS } from './actionTypes';

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const database = firebaseApp.database();

export const snapshotToArray = snapshot => {
    let returnArray = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArray.push(item);
    });
    return returnArray;
};

export function fetchWorks() {
  return dispatch => {
    database.ref('/work').on('value', snapshot => {
      dispatch({
        type: FETCH_WORKS,
        payload: snapshotToArray(snapshot)
      });
    });
  }
}
