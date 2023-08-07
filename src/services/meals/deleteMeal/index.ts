import { useEffect, useState } from "react";
import { api } from "../../api";

import { DeleteMealParams } from "./types";
import { AxiosError } from "axios";

const deleteMeal = ({ mealId, makeRequest = false }: DeleteMealParams) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDeleteMeal = async () => {
    try {
      setIsLoading(true);
      await api.delete(`meal/${mealId}`);
    } catch (error) {
      if (error instanceof AxiosError) {
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

  useEffect(() => {
    if (!makeRequest) return;
    handleDeleteMeal();
  }, []);

  return { isLoading, error, handleDeleteMeal };
};

export default deleteMeal;
