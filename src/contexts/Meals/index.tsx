import React, { createContext, useState } from "react";

import {
  MealsContextData,
  MealsProviderProps,
  Stats,
  StatsInfoEnum,
} from "./types";
import { useStats } from "@services";
import useAuth from "@hooks/useAuth";

const MealsContext = createContext({} as MealsContextData);

const MealsProvider = ({ children }: MealsProviderProps) => {
  const { user } = useAuth();
  const [stats, setStats] = useState<Stats>({} as Stats);
  const statsInfo =
    stats.dietPercentage > 50 ? StatsInfoEnum.primary : StatsInfoEnum.secondary;

  const { getStats, isLoading: isLoadingStats } = useStats();

  const handleGetStats = async () => {
    try {
      const { stats } = await getStats({
        userId: user?.id as string,
      });

      setStats(stats);
    } catch (error) {
      throw error;
    }
  };

  return (
    <MealsContext.Provider
      value={{ stats, statsInfo, isLoadingStats, handleGetStats }}
    >
      {children}
    </MealsContext.Provider>
  );
};

export { MealsProvider, MealsContext };
