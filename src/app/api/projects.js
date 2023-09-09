import { createEffect } from "effector";
import api from "../axiosClient";

export const getAllProjectsFx = createEffect(async () => {
  const { data } = await api.get("/api/project/getall");
  return data;
});
