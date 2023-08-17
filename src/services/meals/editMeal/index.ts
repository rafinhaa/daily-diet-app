import { useState } from "react";
import { api } from "../../api";

import { EditMealParams, EditMealData, EditMealResponse } from "./types";
import { AxiosError } from "axios";

const editMeal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<EditMealData | null>(null);

  const handleEditMeal = async ({ mealId, meal }: EditMealParams) => {
    try {
      setIsLoading(true);
      const { data } = await api.patch<EditMealResponse>(`meal/${mealId}`, {
        ...meal,
      });

      setData(data.meal);
      return data.meal;
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

  return { isLoading, error, data, handleEditMeal };
};

export default editMeal;
