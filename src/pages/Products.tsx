import { useState } from 'react';
import { Filter } from 'lucide-react';
import { products } from '@/config/products';
import ProductCard from '@/components/ProductCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ProductsProps {
  onViewProduct: (productId: string) => void;
}

type FilterCategory = 'all' | 'scooters' | 'trampolines';

export default function Products({ onViewProduct }: ProductsProps) {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const revealRef = useScrollReveal<HTMLDivElement>();

  const filtered = filter === 'all' ? products : products.filter((p) => p.category === filter);

  const filters: { value: FilterCategory; label: string; count: number }[] = [
    { value: 'all', label: 'All', count: products.length },
    { value: 'scooters', label: 'Scooters', count: products.filter((p) => p.category === 'scooters').length },
    { value: 'trampolines', label: 'Trampolines', count: products.filter((p) => p.category === 'trampolines').length },
  ];

  return (
    <div className="bg-gray-50 min-h-screen" ref={revealRef}>
      {/* Page header */}
      <section className="bg-[#0B3D2E] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">Catalogue</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 tracking-tight">Products</h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            Browse our range of kids' scooters and trampolines. Add products to your enquiry cart and
            request a bulk quote via WhatsApp.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="flex items-center gap-2.5 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex items-center gap-2 text-gray-400 text-sm font-medium flex-shrink-0">
            <Filter className="w-4 h-4" />
          </div>
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${
                filter === f.value
                  ? 'bg-[#0B3D2E] text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#0B3D2E]/30'
              }`}
            >
              {f.label}
              <span className={`text-xs ${filter === f.value ? 'text-white/60' : 'text-gray-400'}`}>
                {f.count}
              </span>
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((product) => (
            <div key={product.id} className="reveal">
              <ProductCard product={product} onView={onViewProduct} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
