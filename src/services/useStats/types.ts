export type GetStatsParams = { userId: string; makeRequest?: boolean };

export type GetStatsData = {
  stats: {
    totalMeals: number;
    dietMeals: number;
    nonDietMeals: number;
    dietPercentage: number;
    bestSequence: number;
  };
};
