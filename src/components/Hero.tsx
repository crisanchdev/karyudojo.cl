const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-orange-50 pt-20"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-bold text-green-700">
          龍
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            <span className="bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
              Karyū Dōjō
            </span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-700 font-normal mt-2 block">
              Bujinkan Budō Taijutsu Concepción
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Entrena cuerpo, mente y espíritu en un entorno de respeto, calma y desarrollo personal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <button
              onClick={() => scrollToSection('contacto')}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Probar clase de introducción
            </button>
            <button
              onClick={() => scrollToSection('horarios')}
              className="px-8 py-4 bg-white text-green-700 border-2 border-green-700 rounded-full font-semibold text-lg hover:bg-green-700 hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              Ver horario
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            {[
              { number: '25+', label: 'Años de experiencia' },
              { number: '100+', label: 'Estudiantes formados' },
              { number: '1', label: 'Comunidad unida' },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-green-700 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
