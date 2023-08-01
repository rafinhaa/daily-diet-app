import { GetStatsData } from "@services/useStats/types";
import { PropsWithChildren } from "react";

export type MealsProviderProps = PropsWithChildren;

export type Stats = GetStatsData["stats"];

export enum StatsInfoEnum {
  primary = "primary",
  secondary = "secondary",
}

export type MealsContextData = {
  stats: Stats;
  statsInfo: StatsInfoEnum;
  isLoadingStats: boolean;
  handleGetStats: () => Promise<void>;
};
