import { PropsWithChildren } from "react";

export type AuthProviderProps = PropsWithChildren;

export type User = {
  email: string;
  password: string;
};

export type AuthContextData = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};
