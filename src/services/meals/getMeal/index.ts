import { useEffect, useState } from "react";
import { api } from "../../api";

import { GetMealParams, GetMealData, GetMealResponse } from "./types";
import { AxiosError } from "axios";

const getMeal = ({ mealId, makeRequest = false }: GetMealParams) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<GetMealData | null>(null);

  const getMeal = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get<GetMealResponse>(`meal/${mealId}`);

      setData(data.meal);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data?.statusCode === 400) {
          setError("Usuário e/ou senha inválidos!");
        }
        if (error.response?.data?.statusCode === 401) {
          setError("Sem permissão de acesso!");
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
    if (!makeRequest) return;
    getMeal();
  }, []);

  return { isLoading, error, data };
};

export default getMeal;
