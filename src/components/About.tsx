const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-green-700 mb-4">
            Sobre el Dōjō
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
            Un espacio de crecimiento, tradición y respeto
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Karyū Dōjō es un espacio dedicado al estudio del <strong className="text-green-700">Bujinkan Budō Taijutsu</strong>,
                bajo la guía del Shihan Cristián Sánchez.
              </p>
              <p>
                Nuestro propósito es preservar las enseñanzas del Budō japonés como una práctica viva:
                no para competir, sino para <strong className="text-orange-500">comprender y proteger</strong>.
              </p>
              <p>
                Aquí cada entrenamiento es una oportunidad para fortalecer el cuerpo, aclarar la mente
                y templar el espíritu, siguiendo el legado del Sōke Masaaki Hatsumi y Dai Shihan Christian Petroccello.
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                {['Tradición', 'Respeto', 'Disciplina', 'Crecimiento'].map((value) => (
                  <span
                    key={value}
                    className="px-4 py-2 bg-white rounded-full text-green-700 font-semibold shadow-md"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-700 to-orange-500 rounded-2xl shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-9xl font-bold text-white/20 group-hover:scale-110 transition-transform duration-500">
                    火龍
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Karyū Dōjō</h3>
                  <p className="text-white/90">Dōjō del Dragón de Fuego</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-700 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
