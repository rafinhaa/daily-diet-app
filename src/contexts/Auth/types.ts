import { NewAccountDataParams } from "@services/useNewAccount/types";
import { SignInData } from "@services/useSignIn/types";
import { PropsWithChildren } from "react";

export type AuthProviderProps = PropsWithChildren;

export type User = Omit<SignInData["user"], "created_at" | "updated_at"> & {
  created_at?: string;
  updated_at?: string;
};

export type NewAccount = NewAccountDataParams;

export type LoginData = {
  email: string;
  password: string;
};

export type AuthContextData = {
  user: User | null;
  signIn: (data: LoginData) => Promise<void>;
  logout: () => void;
  createNewAccount: (params: NewAccount) => Promise<void>;
  isLoadingSignIn: boolean;
  signInError: string | null;
};
