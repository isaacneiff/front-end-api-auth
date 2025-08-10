import React from "react";
import { KeyRound, UserLock, UserRound } from 'lucide-react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth";

export function register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const data = await registerUser({ name, email, password });
      setMessage(`Usuário criado: ${data.user.email}`);
    } catch (error: any) {
      setMessage(error.response?.data?.message || "Erro ao registrar");
    }
  }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-lg rounded-lg overflow-hidden bg-white">
                {/* Imagem */}
                <div className="hidden md:block md:w-1/2">
                    <img
                        src="https://images.pexels.com/photos/7944876/pexels-photo-7944876.jpeg"
                        alt="Register"
                        className="object-cover h-full w-full" />
                </div>
                {/*formulario*/}
                <div className="w-full md:w-1/2 p-6 sm:p-10">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <KeyRound className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
                            Registrar
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Nome completo */}
                        <div className="relative">
                            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                                Nome completo
                            </label>
                            <div className="relative">
                                <span className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <UserRound className="w-4 h-4" />
                                </span>
                                <input
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    type="text"
                                    id="name"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Seu Nome" />
                            </div>
                        </div>
                        {/* Email */}
                        <div className="relative">
                            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="relative">
                                <span className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <UserRound className="w-4 h-4" />
                                </span>
                                <input
                                    value={email} 
                                    onChange={e => setEmail(e.target.value)}
                                    type="email"
                                    id="email"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Seu Email" />
                            </div>
                        </div>

                        {/* Senha */}
                        <div className="relative">
                            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
                                Senha
                            </label>
                            <div className="relative">
                                <span className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <UserRound className="w-4 h-4" />
                                </span>
                                <input
                                    value={password} 
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                    id="password"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Sua Senha" />
                            </div>
                        </div>

                        {/* Confirmar Senha */}
                        <div className="relative">
                            <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-gray-700">
                                Confirmar Senha
                            </label>
                            <div className="relative">
                                <span className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <UserRound className="w-4 h-4" />
                                </span>
                                <input
                                    value={password} 
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                    id="confirmPassword"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Confirme Sua Senha" />
                            </div>
                        </div>
                        {/* Botão */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-green-600 transition text-sm">
                            Registrar
                        </button>
                         {message && <p>{message}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default register;