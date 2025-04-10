const Footer = () => {
    return (
      <footer className="bg-[#1f2937] text-gray-300 py-8 mt-10"> {/* bg-gray-900 mais suave */}
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} <span className="text-white font-semibold">Ynnothivix</span>. Todos os direitos reservados.
          </p>
            <p className="mt-3 text-sm">
            <a href="#hero" className="text-white hover:underline transition">
              Voltar ao topo ↑
            </a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  