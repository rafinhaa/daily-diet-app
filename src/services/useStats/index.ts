import { useState } from "react";
import { api } from "../api";

import { GetStatsParams, GetStatsData } from "./types";
import { AxiosError } from "axios";

const useStats = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getStats = async ({
    userId,
  }: GetStatsParams): Promise<GetStatsData> => {
    try {
      setIsLoading(true);
      const { data } = await api.get<GetStatsData>(`user/${userId}/stats`);

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

  return { isLoading, error, getStats };
};

export default useStats;
