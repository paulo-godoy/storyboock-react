import axios from "axios";

const api = axios.create({
  baseURL: "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1",
});

export const getDragons = () => api.get("/dragon");
export const getDragonById = (id: string) => api.get(`/dragon/${id}`);
export const createDragon = (data: { name: string; type: string }) =>
  api.post("/dragon", data);
export const updateDragon = (
  id: string,
  data: { name: string; type: string }
) => api.put(`/dragon/${id}`, data);
export const deleteDragon = (id: string) => api.delete(`/dragon/${id}`);
