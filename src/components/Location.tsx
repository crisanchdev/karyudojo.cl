import { MapPin, Clock, Bus, Car, ExternalLink } from 'lucide-react';

const Location = () => {
  return (
    <section id="ubicacion" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-green-700 mb-4">
            Encuéntranos
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16">
            Visita nuestro dōjō en el corazón de Concepción
          </p>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-green-700">Karyū Dōjō</h3>

              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    title: 'Dirección',
                    content: 'Barros Arana 160\nConcepción, Chile',
                  },
                  {
                    icon: Clock,
                    title: 'Horario de Práctica',
                    content: 'Viernes 19:00 - 21:00 hrs',
                  },
                  {
                    icon: Bus,
                    title: 'Transporte Público',
                    content: 'Metro: Estación Concepción\nMicros: Líneas 1, 3, 5',
                  },
                  {
                    icon: Car,
                    title: 'Estacionamiento',
                    content: 'Disponible en calles cercanas',
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-orange-500 hover:translate-x-1"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                          <Icon className="text-green-700" size={24} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-green-700 mb-1">{item.title}</h4>
                        <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Barros+Arana+160+Concepción+Chile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <ExternalLink size={20} />
                <span>Obtener Direcciones</span>
              </a>
            </div>

            <div className="lg:col-span-3">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.0420!2d-73.0518!3d-36.8178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669b5a357000000%3A0x0!2sBarros%20Arana%20160%2C%20Concepci%C3%B3n%2C%20Chile!5e0!3m2!1ses!2scl"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute top-4 right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-2">
                  <MapPin className="text-green-700" size={20} />
                  <span className="font-bold text-green-700">Karyū Dōjō</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
