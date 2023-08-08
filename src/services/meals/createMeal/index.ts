import { useEffect, useState } from "react";
import { api } from "../../api";

import { CreateMealParams, CreateMealData, CreateMealResponse } from "./types";
import { AxiosError } from "axios";

const createMeal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<CreateMealData | null>(null);

  const handleCreateMeal = async ({ userId, meal }: CreateMealParams) => {
    try {
      setIsLoading(true);
      const { data } = await api.post<CreateMealResponse>(`meal/${userId}`, {
        ...meal,
      });

      setData(data.meal);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data?.statusCode === 400) {
          setError("Ocorreu um erro com a validação dos dados!");
        }
        if (error.response?.data?.statusCode === 401) {
          setError("Sem permissão de acesso!");
        }
        if (error.response?.data?.statusCode === 404) {
          setError("Usuário não encontrado!");
        }
        throw error;
      }
      setError("Aconteceu um erro inesperado!");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, data, handleCreateMeal };
};

export default createMeal;
