import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  verifyBeforeUpdateEmail,
} from "firebase/auth";
import auth, { app } from "./firebase.config";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider(app);
  console.log("Provider:", provider);
  const result = await signInWithPopup(auth, provider);

  return result;
};

export const doSignOut = () => {
  return signOut(auth);
};

export const doSendEmailVerfication = (user) => {
  return sendEmailVerification(user);
};

export const doSendPasswordResetEmail = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doVerifyBeforeUpdateEmail = (user, newEmail) => {
  return verifyBeforeUpdateEmail(user, newEmail);
};
