import { useState } from "react";
import { api } from "../../api";

import { DeleteMealParams } from "./types";
import { AxiosError } from "axios";

const deleteMeal = (props?: DeleteMealParams) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [statusCode, setStatusCode] = useState<string | null>(null);

  const handleDeleteMeal = async (mealId: string) => {
    try {
      setIsLoading(true);
      await api.delete(`meal/${mealId}`);
    } catch (error) {
      if (error instanceof AxiosError) {
        setStatusCode(error.response?.data?.statusCode);
        if (error.response?.data?.statusCode === 400) {
          setError("Usuário e/ou senha inválidos!");
        }
        if (error.response?.data?.statusCode === 401) {
          setError("Sem permissão de acesso!");
        }
        if (error.response?.data?.statusCode === 404) {
          setError("Refeição não encontrada!");
        }
        throw error;
      }
      setError("Aconteceu um erro inesperado!");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, statusCode, handleDeleteMeal };
};

export default deleteMeal;
