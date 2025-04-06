// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCte-NrgYMdYaBU1jaI-pV9YL0EaJnRyrA",
  authDomain: "voyagex-8d5bb.firebaseapp.com",
  projectId: "voyagex-8d5bb",
  storageBucket: "voyagex-8d5bb.firebasestorage.app",
  messagingSenderId: "607733292385",
  appId: "1:607733292385:web:dbf9e08194b0d158cab920",
  measurementId: "G-7MV2Q7FQNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);

export{app,auth,db}