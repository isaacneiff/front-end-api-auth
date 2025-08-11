import axios from "axios";

export const api = axios.create({
  baseURL: "back-end-auth-token.railway.internal", // backend rodando
  headers: {
    "Content-Type": "application/json",
  },
});