import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-800 to-green-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">火龍</span>
                <div>
                  <h3 className="text-2xl font-bold">Karyū Dōjō</h3>
                  <p className="text-green-200 text-sm">Bujinkan Budō Taijutsu</p>
                </div>
              </div>
              <p className="text-green-100 leading-relaxed">
                Dirigido por Shihan Cristián Sánchez. Preservando las enseñanzas del Budō japonés en Concepción, Chile.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Contacto</h4>
              <div className="space-y-3">
                <a href="tel:+56961919888" className="flex items-center gap-3 text-green-100 hover:text-white transition-colors">
                  <Phone size={18} />
                  <span>+56 9 6191 9888</span>
                </a>
                <a href="mailto:contacto@karyudojo.cl" className="flex items-center gap-3 text-green-100 hover:text-white transition-colors">
                  <Mail size={18} />
                  <span>contacto@karyudojo.cl</span>
                </a>
                <div className="flex items-start gap-3 text-green-100">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span>Barros Arana 160<br />Concepción, Chile</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/bjk_conce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://facebook.com/karyudojo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Facebook size={24} />
                </a>
              </div>
              <p className="text-green-200 mt-4 text-sm">@bjk_conce</p>
            </div>
          </div>

          <div className="border-t border-green-700/50 pt-8 text-center">
            <p className="text-green-200">
              © {new Date().getFullYear()} Karyū Dōjō — Todos los derechos reservados.
            </p>
            <p className="text-green-300 mt-2 text-sm">
              心技体 • Shin-Gi-Tai • Mente-Técnica-Cuerpo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
