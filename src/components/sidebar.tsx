import React from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Botão para abrir */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-3 rounded-md shadow-md"
          aria-label="Abrir Menu lateral"
        >
          ☰
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-gray-800 text-white flex flex-col w-64 z-50 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 text-2xl font-bold border-b border-gray-700 flex justify-between items-center">
          Meu Projeto
          <button
            onClick={toggleSidebar}
            className="text-white text-xl font-bold focus:outline-none"
            aria-label="Fechar sidebar"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col mt-6">
          <a
            href="/"
            className="px-6 py-3 hover:bg-gray-700 transition-colors duration-200"
            onClick={toggleSidebar}
          >
            Home
          </a>
          <a
            href="#sobre"
            className="px-6 py-3 hover:bg-gray-700 transition-colors duration-200"
            onClick={toggleSidebar}
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="px-6 py-3 hover:bg-gray-700 transition-colors duration-200"
            onClick={toggleSidebar}
          >
            Contato
          </a>
          <a
            href="/login"
            className="px-6 py-3 hover:bg-gray-700 transition-colors duration-200"
            onClick={toggleSidebar}
          >
            Login
          </a>
          <a
            href="/register"
            className="px-6 py-3 hover:bg-gray-700 transition-colors duration-200"
            onClick={toggleSidebar}
          >
            Registrar-se
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
