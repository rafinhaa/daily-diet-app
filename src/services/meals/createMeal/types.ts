import { Meal } from "../getMeals/types";

export type CreateMealParams = {
  userId: string;
  meal: {
    name: string;
    description: string;
    eatedAt: string;
    onTheDiet: boolean;
  };
};

export type CreateMealData = Meal;

export type CreateMealResponse = {
  meal: CreateMealData;
};
