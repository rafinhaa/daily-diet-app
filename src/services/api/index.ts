import axios from "axios";

export const api = axios.create({
  baseURL: "https://daily-diet-api.codedev.cyou/",
});
