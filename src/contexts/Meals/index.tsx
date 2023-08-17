import React, { createContext, useEffect } from "react";

import {
  MealsContextData,
  MealsProviderProps,
  NewMeal,
  Stats,
  StatsInfoEnum,
} from "./types";
import { createMeal, getMeals, useStats, deleteMeal } from "@services";
import { Loading } from "@components";
import { editMeal } from "@services";

const MealsContext = createContext({} as MealsContextData);

const MealsProvider = ({ userId, children }: MealsProviderProps) => {
  const [meals, setMeals] = React.useState<MealsContextData["meals"]>([]);

  const { data: stats } = useStats({
    userId,
    makeRequest: true,
  });
  const { data: allMeals } = getMeals({
    userId,
    makeRequest: true,
  });

  const { handleDeleteMeal } = deleteMeal();
  const { handleEditMeal, error: editMealError } = editMeal();
  const { handleCreateMeal, error: createMealError } = createMeal();

  const hasLoadedAllData = [!!stats, !!meals].every(Boolean);

  useEffect(() => {
    setMeals(allMeals?.meals || []);
  }, [allMeals]);

  const createNewMeal = async (meal: NewMeal) => {
    try {
      const newMeal = await handleCreateMeal({
        userId,
        meal: {
          name: meal.name,
          description: meal.description,
          eatedAt: meal.eatedAt,
          onTheDiet: meal.onTheDiet,
        },
      });
      setMeals((prevMeals) => [...prevMeals, newMeal]);
    } catch {
      throw new Error(createMealError!);
    }
  };

  const editTheMeal = async (meal: NewMeal) => {
    try {
      const editedMeal = await handleEditMeal({
        mealId: meal.id!,
        meal: {
          name: meal.name,
          description: meal.description,
          eatedAt: meal.eatedAt,
          onTheDiet: meal.onTheDiet,
        },
      });

      setMeals((prevMeals) => {
        return prevMeals.map((meal) => {
          if (meal.id === editedMeal.id) {
            return editedMeal;
          }
          return meal;
        });
      });
    } catch {
      throw new Error(editMealError!);
    }
  };

  const deleteViewedMeal = async (mealId: string) => {
    await handleDeleteMeal(mealId);
    setMeals((prevMeals) => prevMeals.filter((meal) => meal.id !== mealId));
  };

  return (
    <MealsContext.Provider
      value={{
        stats: stats?.stats as Stats,
        statsInfo:
          stats?.stats.dietPercentage! > 50
            ? StatsInfoEnum.primary
            : StatsInfoEnum.secondary,
        meals: meals,
        createNewMeal,
        deleteViewedMeal,
        editTheMeal,
      }}
    >
      {hasLoadedAllData ? children : <Loading />}
    </MealsContext.Provider>
  );
};

export { MealsProvider, MealsContext };
