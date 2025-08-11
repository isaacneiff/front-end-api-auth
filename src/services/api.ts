import axios from "axios";

export const api = axios.create({
  baseURL: "back-end-auth-token-production.up.railway.app", // backend rodando
  headers: {
    "Content-Type": "application/json",
  },
});