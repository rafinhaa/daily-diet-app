import React, { createContext, useEffect, useState } from "react";

import { AuthContextData, AuthProviderProps, LoginData, User } from "./types";
import { useSignIn } from "@services";
import { userStorage } from "../../storages";

const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const {
    handleSignIn,
    isLoading: isLoadingSignIn,
    error: signInError,
  } = useSignIn();

  const signIn = async ({ email, password }: LoginData) => {
    try {
      const response = await handleSignIn({
        email,
        password,
      });

      await userStorage.setUser(response.data.user);
      setUser(response.data.user);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const user = await userStorage.getUser();
      if (user) setUser(user);
    };
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isLoadingSignIn, signInError, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
