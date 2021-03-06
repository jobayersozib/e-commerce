import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDAmp9vuR-KC8IyAuEoN0ZSqEpUDRBvLNo",
  authDomain: "crwn-db-3b7c4.firebaseapp.com",
  databaseURL: "https://crwn-db-3b7c4.firebaseio.com",
  projectId: "crwn-db-3b7c4",
  storageBucket: "crwn-db-3b7c4.appspot.com",
  messagingSenderId: "58727150111",
  appId: "1:58727150111:web:adefd03ea990d8b391db2a",
  measurementId: "G-HX076FBL84"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = (userOnfo, callback) => {
  if (!userOnfo) return;
  const userRef = firestore.doc(`users/${userOnfo.uid}`);

  userRef.get().then(data => {
    //console.log(data)
    if (!data.exists) {
      userRef.set({
        uid: userOnfo.uid,
        displayName: userOnfo.displayName,
        email: userOnfo.email,
        createdAt: new Date()
      });
      callback(userRef);
    }
  });
  callback(userRef);
};
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
