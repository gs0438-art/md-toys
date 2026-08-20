import { MessageCircle, Plus, Eye, ArrowRight } from 'lucide-react';
import type { Product } from '@/config/products';
import { formatPrice } from '@/config/products';
import { useEnquiry } from '@/context/EnquiryContext';
import { buildSingleProductMessage, openWhatsApp } from '@/utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onView: (productId: string) => void;
}

export default function ProductCard({ product, onView }: ProductCardProps) {
  const { addItem } = useEnquiry();

  return (
    <div className="group card-base card-hover overflow-hidden flex flex-col">
      {/* Image */}
      <button
        onClick={() => onView(product.id)}
        className="relative overflow-hidden aspect-[4/3] bg-gray-50"
        aria-label={`View ${product.name}`}
      >
        <img
          src={product.image}
          alt={`${product.name} — ${product.category === 'scooters' ? 'kids scooter' : 'kids trampoline'}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur-sm text-[11px] font-bold text-[#0B3D2E] rounded uppercase tracking-wide">
          {product.category === 'scooters' ? 'Scooter' : 'Trampoline'}
        </div>
        {/* Quick view overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg text-sm font-semibold text-[#0B3D2E] shadow-lg">
            <Eye className="w-4 h-4" />
            Quick View
          </span>
        </div>
      </button>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-[#0B3D2E] text-base leading-snug mb-1.5">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-4 leading-relaxed flex-1 line-clamp-2">{product.shortDescription}</p>

        {/* Quick specs */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.specs.slice(0, 2).map((spec) => (
            <span
              key={spec.label}
              className="px-2 py-1 bg-gray-50 text-xs text-gray-600 rounded border border-gray-100 font-medium"
            >
              {spec.value}
            </span>
          ))}
          {product.ageSuitability && (
            <span className="px-2 py-1 bg-[#F59E0B]/10 text-xs text-[#9a6800] rounded border border-[#F59E0B]/20 font-medium">
              {product.ageSuitability}
            </span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1.5 mb-4 pb-4 border-b border-gray-100">
          <span className="text-xs text-gray-400 font-medium">From</span>
          <span className="text-2xl font-extrabold text-[#0B3D2E] tracking-tight">
            {formatPrice(product.startingPrice)}
          </span>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <button
              onClick={() => onView(product.id)}
              className="flex-1 btn-outline text-xs"
            >
              <Eye className="w-3.5 h-3.5" />
              View
            </button>
            <button
              onClick={() => addItem(product.id)}
              className="flex-1 btn-primary text-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              Add to Enquiry
            </button>
          </div>
          <button
            onClick={() => openWhatsApp(buildSingleProductMessage(product.name))}
            className="btn-whatsapp text-xs w-full"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}
