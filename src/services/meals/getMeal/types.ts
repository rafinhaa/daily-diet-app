export type GetMealParams = {
  mealId: string;
  makeRequest?: boolean;
};

export type GetMealData = {
  id: string;
  name: string;
  description: string;
  eatedAt: string;
  onTheDiet: number;
  createdAt: string;
  updatedAt: string;
};

export type GetMealResponse = {
  meal: GetMealData;
};
