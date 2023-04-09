import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase/firebase.config";
import { login } from "./authSlice";

export const auth = getAuth(app);

export const signupWithEmail = ({ email, password, name, url }) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      user &&
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: url,
        })
          .then((data) => {
            return data;
          })
          .catch((error) => {
            console.log(error?.message);
          });
      return user;
    })
    .catch((error) => {
      return error.message;
    });
};

export const getLoggedUserData = () => {
  const unsibscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      return user;
    }
  });

  return unsibscribe();
};

export const logoutAccount = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

export const loginToApp = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
