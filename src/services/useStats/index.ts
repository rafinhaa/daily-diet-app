import { useEffect, useState } from "react";
import { api } from "../api";

import { GetStatsParams, GetStatsData } from "./types";
import { AxiosError } from "axios";

const useStats = ({
  userId,
  makeRequest = false,
  touch = false,
}: GetStatsParams) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [statusCode, setStatusCode] = useState<string | null>(null);
  const [data, setData] = useState<GetStatsData | null>(null);

  const getStats = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get<GetStatsData>(`user/${userId}/stats`);

      setData(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        setStatusCode(error.response?.data?.statusCode);
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

  useEffect(() => {
    if (!makeRequest || touch) return;
    getStats();
  }, [touch]);

  return { isLoading, error, data, statusCode };
};

export default useStats;
