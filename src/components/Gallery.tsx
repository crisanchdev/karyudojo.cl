import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3856420/pexels-photo-3856420.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Práctica de Taijutsu',
      caption: 'Entrenamiento regular - Técnicas de movimiento natural',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/7045409/pexels-photo-7045409.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Seminario Internacional',
      caption: 'Seminario con Shihan invitados',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/7045389/pexels-photo-7045389.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Entrenamiento con Armas',
      caption: 'Práctica con Bokken y Hanbo',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3764015/pexels-photo-3764015.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Práctica de Meditación',
      caption: 'Desarrollo del Shin - Cultivo de la mente',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/7045410/pexels-photo-7045410.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Kata Tradicional',
      caption: 'Demostración de kata clásico',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/6253312/pexels-photo-6253312.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Nuestra Comunidad',
      caption: 'Estudiantes del dōjō',
    },
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigate = (direction: number) => {
    const newIndex = (currentIndex + direction + galleryItems.length) % galleryItems.length;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-green-700 mb-4">
            Galería
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16">
            Momentos de práctica, seminarios y la esencia del Bujinkan en nuestro dōjō
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-black/70 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                      <Play className="text-white ml-1" size={28} fill="white" />
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <X size={24} />
          </button>

          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={() => navigate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <ChevronRight size={28} />
          </button>

          <div className="max-w-5xl w-full">
            <img
              src={galleryItems[currentIndex].src}
              alt={galleryItems[currentIndex].title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-2xl font-bold mb-2">{galleryItems[currentIndex].title}</h3>
              <p className="text-white/80">{galleryItems[currentIndex].caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
