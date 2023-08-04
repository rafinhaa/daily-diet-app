export type GetMealsParams = {
  userId: string;
  makeRequest?: boolean;
};

export type Meal = {
  id: string;
  name: string;
  description: string;
  eatedAt: string;
  onTheDiet: number;
  createdAt: string;
  updatedAt: string;
};

export type GetMealsData = {
  meals: Meal[];
};
