import React, { createContext } from "react";

import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const FirebaseContext = createContext();

if (!firebase.apps.length) {
  firebase.initializeApp();
}

const db = firebase.firestore();

const Firebase = {};

const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider value={Firebase}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseProvider };
