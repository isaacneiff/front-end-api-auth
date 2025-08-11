import axios from "axios";

export const api = axios.create({
  baseURL: "back-end-auth-token-production.up.railway.app/api", // backend rodando
  headers: {
    "Content-Type": "application/json",
  },
});