import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['inicio', 'sobre', 'aprender', 'filosofia', 'maestro', 'horarios', 'galeria', 'ubicacion'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'aprender', label: 'Aprender' },
    { id: 'filosofia', label: 'Filosofía' },
    { id: 'maestro', label: 'Maestro' },
    { id: 'horarios', label: 'Horarios' },
    { id: 'galeria', label: 'Galería' },
    { id: 'ubicacion', label: 'Ubicación' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' : 'bg-white/98 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button onClick={() => scrollToSection('inicio')} className="flex items-center gap-3 group">
            <span className="text-4xl font-bold bg-gradient-to-r from-green-700 to-orange-500 bg-clip-text text-transparent">
              火龍
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 tracking-wide group-hover:text-green-700 transition-colors">
                KARYŪ DŌJŌ
              </span>
              <span className="text-xs text-gray-500 tracking-widest">BUJINKAN</span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-1 bg-gray-50/50 rounded-full px-2 py-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-gray-700 hover:bg-white hover:text-orange-500'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://instagram.com/bjk_conce"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gradient-to-br hover:from-orange-500 hover:to-green-700 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com/karyudojo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gradient-to-br hover:from-orange-500 hover:to-green-700 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Facebook size={20} />
            </a>
            <button
              onClick={() => scrollToSection('contacto')}
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Clase Gratis
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl mt-2 py-4 px-4 space-y-2 animate-in slide-in-from-top">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contacto')}
              className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold mt-4"
            >
              Clase Gratis
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
