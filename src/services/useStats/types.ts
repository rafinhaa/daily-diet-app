export type GetStatsParams = { userId: string };

export type GetStatsData = {
  stats: {
    totalMeals: number;
    dietMeals: number;
    nonDietMeals: number;
    dietPercentage: number;
    bestSequence: number;
  };
};
