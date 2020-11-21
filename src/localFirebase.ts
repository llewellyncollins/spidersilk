import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/performance';

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyBvGbY1UvVOod28gG7OeeQAl0IEg0EdIXU",
    authDomain: "spidersilk-dev-99cc6.firebaseapp.com",
    databaseURL: "https://spidersilk-dev-99cc6.firebaseio.com",
    projectId: "spidersilk-dev-99cc6",
    storageBucket: "spidersilk-dev-99cc6.appspot.com",
    messagingSenderId: "276468063766",
    appId: "1:276468063766:web:4bfa77f697e28d69001f37",
    measurementId: "G-4G3NJH1XEF"
} );

export const performance = firebaseApp.performance();
export const analytics = firebaseApp.analytics();
export const firestore = firebaseApp.firestore();

