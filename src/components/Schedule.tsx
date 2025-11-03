import { Clock, MapPin, Users } from 'lucide-react';

const Schedule = () => {
  return (
    <section id="horarios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-green-700 mb-4">
            Horarios y Ubicación
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16">
            Únete a nuestras sesiones de entrenamiento
          </p>

          <div className="bg-white rounded-3xl shadow-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-700 via-orange-500 to-green-700"></div>

            <div className="space-y-8">
              <div className="flex items-center justify-center gap-4 text-2xl font-semibold text-gray-900">
                <Clock className="text-orange-500" size={32} />
                <span>Viernes 19:00 – 21:00 hrs</span>
              </div>

              <div className="flex items-center justify-center gap-4 text-xl text-gray-700">
                <MapPin className="text-green-700" size={28} />
                <span>Barros Arana 160, Concepción</span>
              </div>

              <div className="border-t border-gray-200 pt-8 space-y-4">
                <div className="flex items-center justify-center gap-3 text-lg text-green-700 font-semibold">
                  <Users size={24} />
                  <span>No se requiere experiencia previa</span>
                </div>
                <p className="text-gray-600 text-lg">
                  Primera clase de introducción <strong className="text-orange-500">gratuita</strong> — reserva tu espacio
                </p>
              </div>

              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-8 px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Reservar clase gratuita
              </button>
            </div>

            <div className="absolute bottom-0 right-0 text-9xl font-bold text-gray-50 leading-none select-none pointer-events-none">
              道
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Clases reducidas', description: 'Atención personalizada en cada sesión' },
              { title: 'Ambiente respetuoso', description: 'Espacio seguro para aprender y crecer' },
              { title: 'Progreso constante', description: 'Sistema de grados y evaluaciones' },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <h3 className="text-lg font-bold text-green-700 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
