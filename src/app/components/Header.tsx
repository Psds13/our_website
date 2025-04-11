import Link from "next/link";
import { LogIn } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-3">
        {/* Logo da Empresa como link para Home */}
        <Link href="/">
          <img
            src="/ynnothivix.jpg"
            alt="Logo da empresa"
            width={48}
            height={48}
            className="rounded-full hover:opacity-80 transition"
          />
        </Link>

        {/* Navegação principal */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/#hero" className="hover:text-gray-300">
            Início
          </Link>
          <Link href="/#about" className="hover:text-gray-300">
            Sobre
          </Link>
          <Link href="/#servicos" className="hover:text-gray-300">
            Serviços
          </Link>
          <Link href="/#processo" className="hover:text-gray-300">
            Processos
          </Link>
          <Link href="/#portfolios" className="hover:text-gray-300">
            Portfólios
          </Link>
        </nav>

        {/* Ícone de login */}
        <Link href="/login" className="ml-4 hover:text-blue-400 transition">
          <LogIn className="w-6 h-6" />
        </Link>

        {/* Menu mobile (a ser implementado) */}
        <button
          className="block md:hidden text-white focus:outline-none ml-4"
          aria-label="Abrir menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
