import { useEffect, useState } from "react";
import { api } from "../../api";

import { GetMealsParams, GetMealsData } from "./types";
import { AxiosError } from "axios";

const getMeals = ({ userId, makeRequest = false }: GetMealsParams) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<GetMealsData | null>(null);
  const [statusCode, setStatusCode] = useState<string | null>(null);

  const getMeals = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get<GetMealsData>(`meal/${userId}/all`);

      setData(data);
    } catch (error) {
      setStatusCode(error.response?.data?.statusCode);
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
    getMeals();
  }, []);

  return { isLoading, error, data, statusCode };
};

export default getMeals;
