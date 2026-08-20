import { MessageCircle, ShoppingBag } from 'lucide-react';
import { whatsappLink } from '@/config/brand';
import { useEnquiry } from '@/context/EnquiryContext';

export default function MobileActionBar() {
  const { totalItems, openCart } = useEnquiry();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] pb-safe">
      <div className="flex items-center gap-2 p-2.5">
        <a
          href={whatsappLink('Hello MD Toys, I would like to enquire about your products.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-[#25D366] rounded-lg active:scale-[0.98] transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
        <button
          onClick={openCart}
          className="relative flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#0B3D2E] bg-[#0B3D2E]/5 border border-[#0B3D2E]/10 rounded-lg active:scale-[0.98] transition-transform"
          aria-label={`Enquiry cart with ${totalItems} items`}
        >
          <ShoppingBag className="w-5 h-5" />
          Enquiry
          {totalItems > 0 && (
            <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 bg-[#F59E0B] text-white text-xs font-bold rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
