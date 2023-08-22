import { SignInData } from "@services/useSignIn/types";
import { PropsWithChildren } from "react";

export type AuthProviderProps = PropsWithChildren;

export type User = SignInData["user"];

export type LoginData = {
  email: string;
  password: string;
};

export type AuthContextData = {
  user: User | null;
  signIn: (data: LoginData) => Promise<void>;
  logout: () => void;
  isLoadingSignIn: boolean;
  signInError: string | null;
};
