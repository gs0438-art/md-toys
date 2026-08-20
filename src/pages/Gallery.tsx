import { useState } from 'react';
import { galleryImages } from '@/config/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories = ['All', 'Scooters', 'Trampolines', 'Products', 'Packaging', 'Manufacturing'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const revealRef = useScrollReveal<HTMLDivElement>();

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  // First image gets featured treatment
  const [featured, ...rest] = filtered;

  return (
    <div className="bg-white min-h-screen" ref={revealRef}>
      {/* Header */}
      <section className="bg-[#0B3D2E] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">Gallery</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 tracking-tight">Gallery</h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            A visual overview of our product range, packaging and logistics. Product images are for
            illustration purposes.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                activeCategory === cat
                  ? 'bg-[#0B3D2E] text-white shadow-sm'
                  : 'bg-gray-50 text-gray-600 border border-gray-200 hover:border-[#0B3D2E]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-20">No images in this category.</p>
        ) : (
          <>
            {/* Featured image */}
            {featured && (
              <div className="mb-4 reveal">
                <div className="group relative overflow-hidden rounded-2xl aspect-[16/9] sm:aspect-[2/1] bg-gray-50 shadow-md">
                  <img
                    src={featured.url}
                    alt={featured.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                    <span className="text-sm font-bold text-white uppercase tracking-wide">
                      {featured.category}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Supporting grid */}
            {rest.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {rest.map((image, idx) => (
                  <div
                    key={`${image.url}-${idx}`}
                    className="group relative overflow-hidden rounded-xl aspect-square bg-gray-50 reveal"
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-bold text-white uppercase tracking-wide">
                        {image.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
