import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_KEY } from "../keys";
import { User } from "@contexts/Auth/types";

export const setUser = async (values: User | null) => {
  try {
    const jsonValue = JSON.stringify(values);
    await AsyncStorage.setItem(USER_KEY, jsonValue);
  } catch (e) {
    throw new Error("Não foi possível salvar o token");
  }
};

export const getUser = async () => {
  try {
    const value = await AsyncStorage.getItem(USER_KEY);
    if (value !== null) return JSON.parse(value) as User;
  } catch (e) {
    throw new Error("Não foi possível recuperar o token");
  }
};
