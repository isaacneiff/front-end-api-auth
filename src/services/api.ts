import axios from "axios";

export const api = axios.create({
  baseURL: "https://back-end-auth-token-production.up.railway.app/api/auth/login", // backend rodando
  headers: {
    "Content-Type": "application/json",
  },
});