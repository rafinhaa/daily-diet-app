import { GetMealsData } from "@services/meals/getMeals/types";
import { GetStatsData } from "@services/useStats/types";
import { PropsWithChildren } from "react";

export type MealsProviderProps = PropsWithChildren & {
  userId: string;
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
};
