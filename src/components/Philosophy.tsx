const Philosophy = () => {
  const principles = [
    {
      kanji: '心',
      title: 'Shin',
      subtitle: 'Mente e Intención',
      description: 'Cultivar calma, respeto y atención constante.',
      color: 'from-green-700 to-green-600'
    },
    {
      kanji: '技',
      title: 'Gi',
      subtitle: 'Técnica',
      description: 'Refinar el movimiento hasta volverlo natural y preciso.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      kanji: '体',
      title: 'Tai',
      subtitle: 'Cuerpo',
      description: 'Desarrollar una estructura firme, flexible y consciente.',
      color: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <section id="filosofia" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-green-700 mb-4">
            Filosofía Shin-Gi-Tai
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-4xl mx-auto">
            Cuando Shin, Gi y Tai se equilibran, el practicante alcanza una forma de presencia silenciosa:
            el Budō como estado interior.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center hover:-translate-y-2"
              >
                <div className="mb-6 relative">
                  <div className="text-8xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                    {principle.kanji}
                  </div>
                  <div className={`absolute inset-0 flex items-center justify-center text-8xl font-bold bg-gradient-to-br ${principle.color} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    {principle.kanji}
                  </div>
                </div>

                <h3 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${principle.color} bg-clip-text text-transparent`}>
                  {principle.title}
                </h3>
                <p className="text-gray-500 font-semibold mb-4">
                  {principle.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-700 to-orange-500 rounded-2xl p-8 text-center text-white shadow-xl">
            <p className="text-xl font-medium leading-relaxed">
              La armonía entre mente, técnica y cuerpo es el camino hacia la maestría interior
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
