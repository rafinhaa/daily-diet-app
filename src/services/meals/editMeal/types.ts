import { Meal } from "../getMeals/types";

export type EditMealParams = {
  mealId: string;
  meal: Partial<{
    name: string;
    description: string;
    eatedAt: string;
    onTheDiet: boolean;
  }>;
};

export type EditMealData = Meal;

export type EditMealResponse = {
  meal: EditMealData;
};
