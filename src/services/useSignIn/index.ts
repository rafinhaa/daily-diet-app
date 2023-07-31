import { useState } from "react";
import { api } from "../api";

import { SignInDataParams, SignInData } from "./types";
import { AxiosError } from "axios";

const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async ({
    email,
    password,
  }: SignInDataParams): Promise<SignInData> => {
    try {
      setIsLoading(true);
      const { data } = await api.post<SignInData>("auth/signin", {
        email,
        password,
      });

      setIsLoading(false);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data?.statusCode === 400) {
          setError("Usuário e/ou senha inválidos!");
        }
        if (error.response?.data?.statusCode === 401) {
          setError("Usuário e/ou senha inválidos!");
        }
        throw error;
      }
      setError("Aconteceu um erro inesperado!");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, handleSignIn };
};

export default useSignIn;
