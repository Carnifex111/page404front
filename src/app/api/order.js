import { createEffect } from "effector";
import api from "../axiosClient";

export const postOrderFx = createEffect(async (orderData) => {
  try {
    const response = await api.post("/api/order/create", orderData);
    return response.data;
  } catch (error) {
    console.error("Ошибка при создании заказа:", error);
    throw error;
  }
});
