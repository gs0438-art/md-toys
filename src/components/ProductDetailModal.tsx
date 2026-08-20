import { useState, useEffect } from 'react';
import { X, Plus, Minus, MessageCircle, ShoppingBag, Check, ArrowRight } from 'lucide-react';
import type { Product } from '@/config/products';
import { formatPrice, products } from '@/config/products';
import { useEnquiry } from '@/context/EnquiryContext';
import { buildSingleProductMessage, openWhatsApp } from '@/utils/whatsapp';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onView: (productId: string) => void;
}

export default function ProductDetailModal({ product, onClose, onView }: ProductDetailModalProps) {
  const { addItem } = useEnquiry();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Reset state when product changes
  useEffect(() => {
    setQuantity(1);
    setActiveImage(0);
    setAdded(false);
  }, [product.id]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 2);

  const handleAdd = () => {
    addItem(product.id, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWhatsApp = () => {
    openWhatsApp(buildSingleProductMessage(product.name, quantity));
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={onClose} aria-hidden="true" />
      <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-label={product.name}>
        <div className="min-h-full flex items-start sm:items-center justify-center p-0 sm:p-4">
          <div
            className="relative bg-white w-full sm:max-w-5xl sm:rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/95 backdrop-blur-sm rounded-full text-gray-700 hover:bg-white shadow-md transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* Image gallery */}
              <div className="bg-gray-50">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.galleryImages[activeImage] || product.image}
                    alt={`${product.name} — ${product.category === 'scooters' ? 'kids scooter' : 'kids trampoline'} view ${activeImage + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {product.galleryImages.length > 1 && (
                  <div className="flex gap-2 p-3 overflow-x-auto scrollbar-hide">
                    {product.galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                          activeImage === idx
                            ? 'border-[#0B3D2E] ring-2 ring-[#0B3D2E]/10'
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                        aria-label={`View image ${idx + 1}`}
                      >
                        <img
                          src={img}
                          alt={`${product.name} thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8 flex flex-col max-h-[90vh] sm:max-h-[85vh]">
                <div className="flex-1 overflow-y-auto scrollbar-hide -mr-2 pr-2">
                  <span className="inline-block px-3 py-1 bg-[#0B3D2E]/5 text-[#0B3D2E] text-xs font-bold uppercase tracking-wide rounded-full mb-3">
                    {product.category === 'scooters' ? 'Kids Scooter' : 'Trampoline'}
                  </span>
                  <h2 className="text-2xl font-extrabold text-[#0B3D2E] mb-2 leading-tight">{product.name}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{product.description}</p>

                  {/* Trampoline specifics */}
                  {product.category === 'trampolines' && product.diameter && (
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="bg-gray-50 rounded-lg p-3.5 border border-gray-100">
                        <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Diameter</p>
                        <p className="font-bold text-[#0B3D2E] text-lg">{product.diameter}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3.5 border border-gray-100">
                        <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Max Capacity</p>
                        <p className="font-bold text-[#0B3D2E] text-lg">{product.maxCapacity}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3.5 border border-gray-100">
                        <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Recommended</p>
                        <p className="font-bold text-[#0B3D2E] text-sm">{product.recommendedChildren}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3.5 border border-gray-100">
                        <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Age</p>
                        <p className="font-bold text-[#0B3D2E] text-sm">{product.ageSuitability}</p>
                      </div>
                    </div>
                  )}

                  {product.ageSuitability && product.category === 'scooters' && (
                    <div className="inline-block bg-gray-50 rounded-lg px-4 py-2.5 border border-gray-100 mb-5">
                      <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wide mr-2">Age:</span>
                      <span className="font-bold text-[#0B3D2E]">{product.ageSuitability}</span>
                    </div>
                  )}

                  {/* Features */}
                  <h3 className="text-xs font-bold text-[#0B3D2E] uppercase tracking-[0.1em] mb-2.5">
                    Features
                  </h3>
                  <ul className="space-y-2 mb-5">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <span className="w-5 h-5 rounded-full bg-[#F59E0B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#F59E0B]" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Specs table */}
                  <h3 className="text-xs font-bold text-[#0B3D2E] uppercase tracking-[0.1em] mb-2.5">
                    Specifications
                  </h3>
                  <div className="border border-gray-100 rounded-lg overflow-hidden mb-5">
                    {product.specs.map((spec, idx) => (
                      <div
                        key={spec.label}
                        className={`flex justify-between px-4 py-2.5 text-sm ${
                          idx % 2 === 0 ? 'bg-gray-50/70' : 'bg-white'
                        }`}
                      >
                        <span className="text-gray-500 font-medium">{spec.label}</span>
                        <span className="font-semibold text-gray-800">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price + quantity + actions */}
                <div className="border-t border-gray-100 pt-5 flex-shrink-0">
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-xs text-gray-400 font-medium">Starting from</span>
                    <span className="text-3xl font-extrabold text-[#0B3D2E] tracking-tight">
                      {formatPrice(product.startingPrice)}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-semibold text-gray-700">Quantity</span>
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-30"
                        disabled={quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-bold text-[#0B3D2E]">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 text-gray-600 hover:bg-gray-50 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={handleAdd}
                      className="flex-1 btn-primary-lg"
                    >
                      {added ? (
                        <>
                          <Check className="w-5 h-5" />
                          Added to Enquiry
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-5 h-5" />
                          Add to Enquiry
                        </>
                      )}
                    </button>
                    <button
                      onClick={handleWhatsApp}
                      className="flex-1 btn-whatsapp-lg"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Ask About This Product
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Related products */}
            {related.length > 0 && (
              <div className="border-t border-gray-100 p-6 bg-gray-50/50">
                <h3 className="text-xs font-bold text-[#0B3D2E] uppercase tracking-[0.1em] mb-3">
                  Related Products
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {related.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => onView(p.id)}
                      className="flex gap-3 p-3 bg-white border border-gray-100 rounded-lg hover:border-[#0B3D2E]/20 hover:shadow-md transition-all text-left"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="min-w-0 flex flex-col justify-center">
                        <p className="font-semibold text-[#0B3D2E] text-sm leading-tight">{p.name}</p>
                        <p className="text-xs text-gray-500 mt-1">From {formatPrice(p.startingPrice)}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
