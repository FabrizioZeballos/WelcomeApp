// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN2Rw8UinXLXHCh-hjrrHu1TYZLi-rFVA",
  authDomain: "welcome-app-6a028.firebaseapp.com",
  projectId: "welcome-app-6a028",
  storageBucket: "welcome-app-6a028.appspot.com",
  messagingSenderId: "1079820519621",
  appId: "1:1079820519621:web:5687601c78237d7d4148ac",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default auth;
