
import React from "react";
import { Github, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo / Nome */}
        <div className="text-1xl font-semibold">
          Meu Projeto © {new Date().getFullYear()}
        </div>

        {/* Links */}
        <nav className="flex gap-6">
          <a
            href="#sobre"
            className="hover:text-gray-400 transition-colors"
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="hover:text-gray-400 transition-colors"
          >
            Contato
          </a>
          <a 
            href="/login"
            className="hover:text-gray-400 transition-colors"
          > 
            Login
          </a> 
          
        </nav>

        {/* Redes sociais */}
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          > <span><Instagram className="w-4 h-4"> </Instagram></span>
            
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <span> <Github className="w-4 h-4"></Github> </span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
