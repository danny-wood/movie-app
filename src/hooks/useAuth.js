import React, { useState, useEffect, useContext, createContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { tmdbApiUrlV3 } from "../config.json";
import httpService from "../services/httpService";

const authApiUrl = `${tmdbApiUrlV3}/authentication`;
const accountApiUrl = `${tmdbApiUrlV3}/account`;
const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [sessionId, setSessionId] = useState(null);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = async (username, password) => {
    const tokenResponse = await httpService.get(`${authApiUrl}/token/new`);
    const request_token = tokenResponse?.data?.request_token;

    if (request_token) {
      window.location.href = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=http://localhost:3000/approve`;
    }
  };

  const approve = async (requestToken) => {
    //TODO Move logic for getting query string from approve component to this function
    if (!requestToken) return console.error("No request token");

    const data = {
      request_token: requestToken,
    };
    const response = await httpService.post(`${authApiUrl}/session/new`, data);
    const { success, session_id } = response?.data || {};

    if (success) {
      setSessionId(session_id);
      localStorage.setItem("SESSION_ID", session_id);

      const userResponse = await httpService.get(
        `${accountApiUrl}?session_id=${session_id}`
      );
      console.log("userResponse", userResponse.data);
      setUser(userResponse.data);
      localStorage.setItem("USER", JSON.stringify(userResponse.data));

      //TODO handle if user denies access from TMDB account
      history.push("/");
    }
  };

  //   const signup = (email, password) => {
  //     return firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(email, password)
  //       .then((response) => {
  //         setUser(response.user);
  //         return response.user;
  //       });
  //   };

  const signout = () => {
    localStorage.removeItem("USER");
    localStorage.removeItem("SESSION_ID");
    setUser(null);
    setSessionId(null);

    // return firebase
    //   .auth()
    //   .signOut()
    //   .then(() => {
    //     setUser(false);
    //   });
  };

  //   const sendPasswordResetEmail = (email) => {
  //     return firebase
  //       .auth()
  //       .sendPasswordResetEmail(email)
  //       .then(() => {
  //         return true;
  //       });
  //   };

  //   const confirmPasswordReset = (code, password) => {
  //     return firebase
  //       .auth()
  //       .confirmPasswordReset(code, password)
  //       .then(() => {
  //         return true;
  //       });
  //   };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  // useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(false);
  //     }
  //   });

  // Cleanup subscription on unmount
  //   return () => unsubscribe();
  // }, []);

  useEffect(() => {
    const storedSessionId = localStorage.getItem("SESSION_ID");
    const storedUser = JSON.parse(localStorage.getItem("USER"));
    setSessionId(() => storedSessionId || null);
    setUser(() => storedUser || null);
  }, []);

  // Return the user object and auth methods
  return {
    user,
    sessionId,
    signin,
    approve,
    signout,
    // signup,
    // sendPasswordResetEmail,
    // confirmPasswordReset,
  };
}
