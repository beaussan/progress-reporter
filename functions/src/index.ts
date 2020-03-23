import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const app = admin.initializeApp();
const db = app.firestore();

export const onUserCreated = functions.auth.user().onCreate(async (user) => {
  await db.doc(`/tp/angular-init/progress/${user.uid}`).create({
    uid: user.uid,
    userName: user.displayName,
    stepsDone: [],
  });
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
