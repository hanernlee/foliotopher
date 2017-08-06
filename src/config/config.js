import firebase from 'firebase';

const config = {
};

firebase.initializeApp(config);

export const database = firebase.database();
export const storage = firebase.storage();
