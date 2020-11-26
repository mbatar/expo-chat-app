import React, { createContext, useContext, useReducer } from "react";
import firebase from "../config/firebase";

const AppStateContext = createContext();
const AppDispatchContext = createContext();

function appReducer(state, action) {
  switch (action.type) {
    case "islogin":
      return { ...state, isLogin: action.payload };
    case "loading":
      return { ...state, loading: action.payload };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, {
    isLogin: false,
    loading: false,
    chats: [
      {
        id: 1,
        with: 2,
        messages: [
          { id: 1, content: "Merhaba, nasılsın ?", from: 2 },
          { id: 2, content: "Teşekkür ederim. İyiyim sen nasılsın ?", from: 1 },
          { id: 3, content: "Teşekkür ederim. Bende iyiyim.", from: 2 },
        ],
      },
      {
        id: 2,
        with: 3,
        messages: [
          { id: 1, content: "İşe gidiyorum.", from: 3 },
          { id: 2, content: "Tamam. Dikkat et.", from: 1 },
          { id: 3, content: "Ederim.", from: 3 },
        ],
      },
    ],
  });
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppProvider");
  }
  return context;
}

function useAppDispatch() {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppProvider");
  }
  return context;
}

async function login(dispatch, email, password) {
  dispatch({ type: "loading", payload: true });
  try {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch({ type: "islogin", payload: true });
      });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch({ type: "loading", payload: false });
  }
}

async function signup(dispatch, email, password) {
  dispatch({ type: "loading", payload: true });
  try {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch({ type: "islogin", payload: true });
      });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch({ type: "loading", payload: false });
  }
}
function logout(dispatch) {
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: "islogin", payload: false });
    });
}

export { AppProvider, useAppState, useAppDispatch, login, logout, signup };
