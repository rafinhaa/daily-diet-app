export type CreateMealParams = {
  userId: string;
  meal: {
    name: string;
    description: string;
    eatedAt: string;
    onTheDiet: boolean;
  };
};

export type CreateMealData = {
  id: string;
  name: string;
  description: string;
  eatedAt: number;
  onTheDiet: string;
  createdAt: string;
};

export type CreateMealResponse = {
  meal: CreateMealData;
};
