import React, { createContext } from "react";

import {
  MealsContextData,
  MealsProviderProps,
  Stats,
  StatsInfoEnum,
} from "./types";
import { getMeals, useStats } from "@services";
import { Loading } from "@components";

const MealsContext = createContext({} as MealsContextData);

const MealsProvider = ({ userId, children }: MealsProviderProps) => {
  const { data: stats } = useStats({
    userId,
    makeRequest: true,
  });
  const { data: meals } = getMeals({
    userId,
    makeRequest: true,
  });

  const hasLoadedAllData = [stats, meals].some(Boolean);

  return (
    <MealsContext.Provider
      value={{
        stats: stats?.stats as Stats,
        statsInfo:
          stats?.stats.dietPercentage! > 50
            ? StatsInfoEnum.primary
            : StatsInfoEnum.secondary,
        meals: meals?.meals || [],
      }}
    >
      {hasLoadedAllData ? children : <Loading />}
    </MealsContext.Provider>
  );
};

export { MealsProvider, MealsContext };
