import axios from "axios";

export const api = axios.create({
  baseURL: "https://finease-server-chi.vercel.app", // your server URL
});
