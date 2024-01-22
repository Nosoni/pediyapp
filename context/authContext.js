import { createContext, useMemo, useReducer } from "react";
import * as SecureStore from "expo-secure-store";

export const authContext = () => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "LOGIN":
        case "SIGNIN":
          return {
            ...prevState,
            isLoged: true,
            token: action.token,
          };
        case "LOGOUT":
          return {
            ...prevState,
            isLoged: false,
            token: null,
          };
      }
    },
    {
      isLoged: false,
      token: null,
    }
  );

  const authContext = useMemo(
    () => ({
      logIn: async (data) => {
        var token = "token";
        await SecureStore.setItemAsync("token", token);
        dispatch({ type: "LOGIN", token });
      },
      signIn: async (data) => {
        var token = "token";
        await SecureStore.setItemAsync("token", token);
        dispatch({ type: "SIGNIN", token });
      },
      signOut: async () => {
        await SecureStore.deleteItemAsync("token");
        dispatch({ type: "LOGOUT" });
      },
    }),
    []
  );

  const isLoged = () => state.isLoged;

  const getToken = async () => {
    let token;
    try {
      token = await SecureStore.getItemAsync("token");
      dispatch({ type: "LOGIN", token });
    } catch (error) {
      dispatch({ type: "LOGOUT", token });
    }
  };

  return { authContext, isLoged, getToken };
};
export const AuthContext = createContext(null);
