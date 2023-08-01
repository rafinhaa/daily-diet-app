import { useContext } from "react";
import { MealsContext } from "@contexts";

const useMeals = () => {
  const context = useContext(MealsContext);

  return context;
};

export default useMeals;
