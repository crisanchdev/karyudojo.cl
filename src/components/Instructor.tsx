const Instructor = () => {
  return (
    <section id="maestro" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-green-700 mb-4">
            El Maestro
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16">
            Guía y mentor en el camino del Budō
          </p>

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative group">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-orange-500 to-green-700 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
                  <span className="text-9xl font-bold text-white">師</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-green-700 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-orange-500 mb-2">
                  Shihan Cristián Sánchez
                </h3>
                <p className="text-green-700 font-semibold text-lg">
                  Instructor certificado Bujinkan Budō Taijutsu
                </p>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Instructor certificado del Bujinkan Budō Taijutsu, con más de <strong>25 años de práctica</strong> en artes marciales japonesas.
                </p>
                <p>
                  Su enseñanza combina la tradición del Budō con la realidad moderna, buscando equilibrio,
                  respeto y crecimiento continuo.
                </p>
                <p>
                  Dirige Karyū Dōjō en Concepción, colaborando con Shihan Wladimir Parra (Shintoku Dōjō)
                  para fortalecer la comunidad marcial del sur de Chile.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  { value: '25+', label: 'Años de práctica' },
                  { value: '100+', label: 'Estudiantes' },
                  { value: '15+', label: 'Años enseñando' },
                  { value: 'Shihan', label: 'Rango certificado' },
                ].map((stat, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                    <div className="text-2xl font-bold text-orange-500">{stat.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
