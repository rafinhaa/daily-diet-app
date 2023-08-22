import { GetMealsData, Meal } from "@services/meals/getMeals/types";
import { GetStatsData } from "@services/useStats/types";
import { PropsWithChildren } from "react";

export type MealsProviderProps = PropsWithChildren & {
  userId: string;
  logout: () => void;
};

export type Stats = GetStatsData["stats"];

export type Meals = GetMealsData["meals"];

export enum StatsInfoEnum {
  primary = "primary",
  secondary = "secondary",
}

export type MealsContextData = {
  stats: Stats;
  statsInfo: StatsInfoEnum;
  meals: Meals;
  createNewMeal: (meal: NewMeal) => Promise<void>;
  deleteViewedMeal: (mealId: string) => Promise<void>;
  editTheMeal: (meal: NewMeal) => Promise<void>;
};

export type NewMeal = Omit<
  Meal,
  "id" | "onTheDiet" | "createdAt" | "updatedAt"
> & {
  id?: string;
  onTheDiet: boolean;
};
