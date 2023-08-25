import { useState } from "react";
import { api } from "../api";

import { NewAccountDataParams, NewAccountData } from "./types";
import { AxiosError, AxiosResponse } from "axios";

const useNewAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleNewAccount = async ({
    email,
    password,
    name,
    avatarUrl,
  }: NewAccountDataParams): Promise<AxiosResponse<NewAccountData>> => {
    try {
      setIsLoading(true);
      const response: AxiosResponse<NewAccountData> =
        await api.post<NewAccountData>("/user", {
          email,
          password,
          name,
          avatarUrl,
        });

      setIsLoading(false);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data?.statusCode === 409) {
          setError("Usuário já cadastrado!");
        }
        throw error;
      }
      setError("Aconteceu um erro inesperado!");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, handleNewAccount };
};

export default useNewAccount;
