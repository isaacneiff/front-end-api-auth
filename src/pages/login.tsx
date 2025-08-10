import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { KeyRound, UserLock, LockOpen } from 'lucide-react'
import { loginUser } from "../services/auth";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const data = await loginUser({ email, password });
      setMessage(`Token recebido: ${data.token}`);
      localStorage.setItem("token", data.token);
    } catch (error: any) {
      setMessage(error.response?.data?.message || "Erro ao logar");
    }
  }

    return (
        <div className="h-screen flex items-center justify-center bg-contain bg-gray-100">
            <div className="flex w-full max-w-5xl shadow-lg rounded-lg overflow-hidden bg-white">
                {/* Imagem à esquerda 
                hidden md:block	Esconde a imagem em telas menores que md
                flex-col md:flex-row	Alinha o conteúdo em coluna no celular, linha no desktop
                p-6 sm:p-10	Padding menor no celular, maior em tablets+
                text-sm	Tamanhos menores de fonte nos inputs e labels para se ajustar na tela
                */}
                <div className="md:w-1/2 hidden md:block">
                    <img
                        src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80"
                        alt="Login"
                        className="object-cover h-full w-full"
                    />
                </div>
                {/* Formulário à direita 
                grid grid-cols-1 lg:grid-cols-2	Grid com 1 coluna em mobile e 2 colunas em desktop (lg ≥ 1024px)
                h-screen	Altura total da tela (100vh)
                hidden lg:block	Esconde no mobile, mostra imagem só em desktop
                bg-cover bg-center	Faz a imagem cobrir todo o container mantendo o centro
                flex items-center justify-center	Centraliza o conteúdo do formulário
                max-w-md	Limita largura máxima do card de login
                rounded-lg shadow-lg	Card com borda arredondada e sombra elegante
                focus:ring-2 focus:ring-indigo-500	Foco nos inputs com anel azul
                transition	Animações suaves no hover dos botões*/}
                <div className="w-full md:w-1/2 p-8">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <KeyRound className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                                Email
                            </label>
                            <div className="relative">
                                <span className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <UserLock className="w-4 h-4" />
                                </span>
                                <input
                                    value={email} 
                                    onChange={e => setEmail(e.target.value)}
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
                                Senha
                            </label>
                            <div className="relative">
                                <span className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <UserLock className="w-4 h-4" />
                                </span>
                                <input
                                    value={password} 
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                            Entrar
                        </button>
                         {message && <p>{message}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

