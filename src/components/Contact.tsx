import { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    edad: '',
    experiencia: 'no',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert('¡Gracias por tu interés! Te contactaremos pronto para confirmar tu clase de introducción.');
      setFormData({ nombre: '', email: '', edad: '', experiencia: 'no' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-green-700 mb-4">
            Invitación a entrenar
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 leading-relaxed">
            Si deseas comenzar un camino de equilibrio y disciplina, estás invitado a una clase de introducción gratuita.
            No buscamos fuerza ni destreza; solo disposición para aprender y compromiso con el respeto.
          </p>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-green-700 font-semibold mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-green-700 font-semibold mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="edad" className="block text-green-700 font-semibold mb-2">
                  Edad
                </label>
                <input
                  type="number"
                  id="edad"
                  name="edad"
                  value={formData.edad}
                  onChange={handleChange}
                  min="16"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="experiencia" className="block text-green-700 font-semibold mb-2">
                  Experiencia previa en artes marciales
                </label>
                <select
                  id="experiencia"
                  name="experiencia"
                  value={formData.experiencia}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900 bg-white"
                >
                  <option value="no">No tengo experiencia</option>
                  <option value="si">Sí, tengo experiencia</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Reservar clase de introducción</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="mt-12 text-center space-y-4">
            <p className="text-gray-600">
              También puedes contactarnos directamente:
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <a href="tel:+56961919888" className="text-orange-500 hover:text-orange-600 font-semibold">
                +56 9 6191 9888
              </a>
              <a href="mailto:contacto@karyudojo.cl" className="text-orange-500 hover:text-orange-600 font-semibold">
                contacto@karyudojo.cl
              </a>
              <a href="https://instagram.com/bjk_conce" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 font-semibold">
                @bjk_conce
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
