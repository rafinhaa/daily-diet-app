import React, { createContext, useState } from "react";

import { AuthContextData, AuthProviderProps, LoginData, User } from "./types";
import { useSignIn } from "@services";

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
      const { user } = await handleSignIn({
        email,
        password,
      });

      setUser(user);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoadingSignIn, signInError, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
