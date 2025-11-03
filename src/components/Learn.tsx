import { Target, Brain, Shield } from 'lucide-react';

const Learn = () => {
  const learningItems = [
    {
      icon: Target,
      title: 'Movimiento natural',
      description: 'Aprenderás a moverte con equilibrio y eficacia, sin fuerza innecesaria. El cuerpo encuentra su camino natural cuando la mente está en calma.',
      color: 'from-green-700 to-green-600'
    },
    {
      icon: Brain,
      title: 'Autocontrol y atención plena',
      description: 'Desarrollarás serenidad ante la tensión, respiración estable y mente clara. La verdadera fortaleza surge del equilibrio interior.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Protección con propósito',
      description: 'Aprenderás a cuidar de ti y de quienes te rodean, sin violencia ni agresión. La protección verdadera nace de la comprensión.',
      color: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <section id="aprender" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-green-700 mb-4">
            Qué aprenderás
          </h2>
          <p className="text-center text-gray-600 text-xl mb-16 italic max-w-3xl mx-auto">
            "El objetivo no es pelear mejor, sino vivir mejor."
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {learningItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-transparent hover:-translate-y-2"
                >
                  <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
