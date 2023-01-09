
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAImjgqyuXAS0CKNfTYh0J4leh-3RA4V8U",
    authDomain: "huh-reality.firebaseapp.com",
    databaseURL: "https://huh-reality.firebaseio.com",
    projectId: "huh-reality",
    storageBucket: "huh-reality.appspot.com",
    messagingSenderId: "525854981408",
    appId: "1:525854981408:web:137ae22636d02a6bcbab45",
    measurementId: "G-C80LTJE96P"
};

firebase.initializeApp(config)

export default firebase


/*

# Create File  firebase-messaging-sw in build/ with follwing contents

importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js");

firebase.initializeApp({
    messagingSenderId: "525854981408",
});

const initMessaging = firebase.messaging();

*/