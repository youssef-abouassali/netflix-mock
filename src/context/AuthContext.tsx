import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }: any) {
  const [user, setUser] = useState({});

  function signUp(email: string, passowrd: string) {
    createUserWithEmailAndPassword(auth, email, passowrd);
    setDoc(doc(db, "users", email), {
      savedShows: [],
    });
  }

  function logIn(email: any, password: any) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser!);
    });
    return () => {
      unsubscribe;
    };
  }, []);

  const values: any = { signUp, logIn, logOut, user };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export function UserAuth() {
  return useContext(AuthContext);
}
