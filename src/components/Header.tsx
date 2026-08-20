import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, ChevronRight } from 'lucide-react';
import { brand, whatsappLink } from '@/config/brand';
import { useEnquiry } from '@/context/EnquiryContext';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const navItems = [
  { label: 'Home', page: 'home' },
  { label: 'Products', page: 'products' },
  { label: 'OEM', page: 'oem' },
  { label: 'Dealers', page: 'dealers' },
  { label: 'About', page: 'about' },
  { label: 'Gallery', page: 'gallery' },
  { label: 'Contact', page: 'contact' },
];

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useEnquiry();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNav = (page: string) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-2.5 flex-shrink-0"
              aria-label={`${brand.brandName} home`}
            >
              <div className="w-10 h-10 rounded-lg bg-[#0B3D2E] flex items-center justify-center text-white font-extrabold text-base tracking-tight">
                MD
              </div>
              <div className="text-left">
                <div className="font-bold text-[#0B3D2E] text-base leading-tight">
                  {brand.brandName}
                </div>
                <div className="text-[10px] text-gray-500 leading-tight tracking-[0.1em] uppercase font-medium">
                  {brand.tagline}
                </div>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                    currentPage === item.page
                      ? 'text-[#0B3D2E]'
                      : 'text-gray-600 hover:text-[#0B3D2E]'
                  }`}
                >
                  {item.label}
                  {currentPage === item.page && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#F59E0B] rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-2.5">
              <button
                onClick={openCart}
                className="relative flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-[#0B3D2E] border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                aria-label={`Enquiry cart with ${totalItems} items`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Enquiry</span>
                {totalItems > 0 && (
                  <span className="ml-0.5 min-w-[18px] h-[18px] px-1 bg-[#F59E0B] text-white text-[11px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => handleNav('products')}
                className="btn-primary"
              >
                View Products
              </button>
              <a
                href={whatsappLink('Hello MD Toys, I would like to request a bulk quote.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile actions */}
            <div className="flex lg:hidden items-center gap-1">
              <button
                onClick={openCart}
                className="relative p-2 text-[#0B3D2E]"
                aria-label={`Enquiry cart with ${totalItems} items`}
              >
                <ShoppingBag className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute top-0.5 right-0.5 min-w-[18px] h-[18px] px-1 bg-[#F59E0B] text-white text-[11px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-[#0B3D2E]"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className={`flex items-center justify-between px-4 py-3.5 text-left text-base font-medium rounded-lg transition-colors ${
                    currentPage === item.page
                      ? 'text-[#0B3D2E] bg-[#0B3D2E]/5'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                </button>
              ))}
              <div className="flex gap-2.5 pt-4 mt-2 border-t border-gray-100">
                <button
                  onClick={() => handleNav('products')}
                  className="flex-1 btn-primary"
                >
                  View Products
                </button>
                <a
                  href={whatsappLink('Hello MD Toys, I would like to request a bulk quote.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-accent text-center"
                >
                  Get a Quote
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
      <div className="h-16" />
    </>
  );
}
