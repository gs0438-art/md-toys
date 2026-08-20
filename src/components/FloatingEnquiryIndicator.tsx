import { ShoppingBag } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';

export default function FloatingEnquiryIndicator() {
  const { totalItems, openCart, isOpen } = useEnquiry();

  if (totalItems === 0 || isOpen) return null;

  return (
    <button
      onClick={openCart}
      className="hidden lg:flex fixed bottom-6 right-6 z-40 items-center gap-3 pl-4 pr-5 py-3 bg-[#0B3D2E] text-white rounded-full shadow-xl hover:shadow-2xl hover:bg-[#0a3426] transition-all duration-300 group"
      aria-label={`Enquiry cart with ${totalItems} items`}
    >
      <span className="relative flex items-center justify-center w-8 h-8 bg-[#F59E0B] rounded-full">
        <ShoppingBag className="w-4 h-4 text-[#0B3D2E]" />
      </span>
      <span className="flex flex-col items-start">
        <span className="text-xs font-medium text-white/70 leading-tight">Enquiry Cart</span>
        <span className="text-sm font-bold leading-tight">
          {totalItems} {totalItems === 1 ? 'Product' : 'Products'}
        </span>
      </span>
      <span className="text-xs font-bold text-[#F59E0B] group-hover:translate-x-0.5 transition-transform">
        View →
      </span>
    </button>
  );
}
