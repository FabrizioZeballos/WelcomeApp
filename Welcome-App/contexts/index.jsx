import { useEffect, useState } from "react";
import auth from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import React from "react";

const AuthContext = React.createContext(); // This specific context is gonna contain data about the user's auth state

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  /*   const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); */

  /* useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser); // It listens for changes in the user's authentication state and calls initializeUser whenever there's a change.

    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  } */

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    }); // It listens for changes in the user's authentication state and calls initializeUser whenever there's a change.

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    /*  userLoggedIn,
    loading, */
  };

  return (
    <AuthContext.Provider value={value}>
      {/* !loading &&  */ children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
