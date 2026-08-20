import { MessageCircle, Phone } from 'lucide-react';
import { brand, whatsappLink, phoneLink } from '@/config/brand';
import { useEnquiry } from '@/context/EnquiryContext';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const navLinks = ['Home', 'Products', 'OEM', 'Dealers', 'About', 'Gallery', 'Contact'];

export default function Footer({ onNavigate }: FooterProps) {
  const { totalItems, openCart } = useEnquiry();

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B3D2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white font-extrabold text-base">
                MD
              </div>
              <div>
                <div className="font-bold text-lg">{brand.brandName}</div>
                <div className="text-[10px] text-white/50 tracking-[0.1em] uppercase font-medium">{brand.tagline}</div>
              </div>
            </div>
            <p className="text-sm text-white/60 max-w-md leading-relaxed mb-6">
              A concept B2B children's products brand focused on dependable, practical and engaging
              products for children — helping retailers and business partners build strong product ranges.
            </p>
            <div className="flex gap-2.5">
              <a
                href={whatsappLink('Hello MD Toys, I would like to enquire about your products.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
              <a href={phoneLink()} className="btn-ghost-light text-xs">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-white/40 mb-4">Navigate</h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((label) => (
                <li key={label}>
                  <button
                    onClick={() => handleNav(label.toLowerCase())}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-white/40 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/60 mb-4">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span>WhatsApp / Phone</span>
              </li>
              <li className="font-bold text-white text-base">{brand.displayPhone}</li>
            </ul>
            <button
              onClick={openCart}
              className="btn-accent text-xs"
            >
              View Enquiry {totalItems > 0 && `(${totalItems})`}
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {brand.brandName}. Demo concept website.
          </p>
          <p className="text-xs text-white/40">
            Prices shown are indicative demo pricing. Dealer, bulk and OEM pricing on request.
          </p>
        </div>
      </div>
    </footer>
  );
}
