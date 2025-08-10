import type { stringify } from "postcss";
import React, { useState } from "react";

const Home: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        mensagem: "",
    })

    const [formStatus, setFormStatus] = useState<"idle" | "enviando" | "Sucesso" | "erro">("idle");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { nome, email, mensagem } = formData;

        if (!nome.trim() || !email.trim() || !mensagem.trim()) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        setFormStatus("enviando");

        setTimeout(() => {
            setFormStatus("Sucesso");
            setFormData({ nome: "", email: "", mensagem: "" });
        }, 1500)
    };

    return (
        <div className="max-w mx-auto space-y-12 font-sans text-gray-800 text-sm">
            {/* Hero */}
            <section className="h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex flex-col justify-center items-center text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold text-gray mb-4 animate-fadeIn">Projeto feito em React e Tailwind. </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8"> Uma página moderna, rápida e responsiva usando React + TypeScript + Tailwind.</p>
                <a href="#contato" className="bg-gray-100 text-indigo-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
                    Entre em contato
                </a>
            </section>

            {/* Seção sobre*/}
            <section id="sobre" className="max-w-6xl mx-auto py-15 px-6 bg-gray-50 rounded">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 ">
                    <div className="max-w-2xl mx-auto rounded">
                    <img
                        src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg"
                        alt="Sobre"
                        className="object-cover rounded h-full w-full"
                    />
                    
                </div>
                    <div className="flex flex-col items-center ">
                        <h2 className="text-4xl font-bold mb-6 text-gray-800">Sobre</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Este é um exemplo de página feita com foco em design moderno e responsividade.
                            Ideal para apresentar projetos, produtos ou até mesmo seu portfólio.
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
            </section>

            {/* Seção contato */}
            <section id="contato" className=" max-w-3xl mx-auto mb-6 py-20 px-6 bg-gray-100 rounded">
                <div className="max-w-3xl mx-auto text-center mb-5">
                    <h2 className="text-4xl font-bold mb-4 text-gray-800">Contato</h2>
                    <p className="text-lg text-gray-600">
                        Tem alguma dúvida ou quer trabalhar comigo? Me envie uma mensagem!
                    </p>
                </div>
                {status === "success" && (
                    <div className="max-w-2xl mx-auto mb-6 p-4 bg-green-100 text-green-800 rounded">
                        ✅ Mensagem enviada com sucesso!
                    </div>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="max-w-2xl mx-auto grid gap-6"
                >
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Seu Nome"
                        className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Seu Email"
                        className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                    <textarea
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        placeholder="Sua Mensagem"
                        rows={5}
                        className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
                    >
                        {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
                    </button>
                </form>
            </section>        
        </div>
        
    )
}
export default Home;