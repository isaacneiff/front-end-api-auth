import axios from "axios";

export const api = axios.create({
  baseURL: "https://back-end-auth-token.railway.internal", // backend rodando
  headers: {
    "Content-Type": "application/json",
  },
});