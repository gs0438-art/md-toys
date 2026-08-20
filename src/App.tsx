import { useState, useCallback, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import FloatingEnquiryIndicator from '@/components/FloatingEnquiryIndicator';
import EnquiryCart from '@/components/EnquiryCart';
import ProductDetailModal from '@/components/ProductDetailModal';
import { EnquiryProvider } from '@/context/EnquiryContext';
import { getProductById } from '@/config/products';
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import OEM from '@/pages/OEM';
import Dealers from '@/pages/Dealers';
import About from '@/pages/About';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';

type Page = 'home' | 'products' | 'oem' | 'dealers' | 'about' | 'gallery' | 'contact';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [viewingProductId, setViewingProductId] = useState<string | null>(null);

  const handleNavigate = useCallback((p: string) => {
    setPage(p as Page);
  }, []);

  const handleViewProduct = useCallback((productId: string) => {
    setViewingProductId(productId);
  }, []);

  const handleCloseProduct = useCallback(() => {
    setViewingProductId(null);
  }, []);

  // Register service worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        /* ignore */
      });
    }
  }, []);

  const viewingProduct = viewingProductId ? getProductById(viewingProductId) : null;

  return (
    <EnquiryProvider>
      <div className="min-h-screen bg-white flex flex-col pb-16 lg:pb-0">
        <Header onNavigate={handleNavigate} currentPage={page} />
        <main className="flex-1">
          {page === 'home' && <Home onNavigate={handleNavigate} onViewProduct={handleViewProduct} />}
          {page === 'products' && <Products onViewProduct={handleViewProduct} />}
          {page === 'oem' && <OEM />}
          {page === 'dealers' && <Dealers />}
          {page === 'about' && <About onNavigate={handleNavigate} />}
          {page === 'gallery' && <Gallery />}
          {page === 'contact' && <Contact />}
        </main>
        <Footer onNavigate={handleNavigate} />
        <MobileActionBar />
        <FloatingEnquiryIndicator />
        <EnquiryCart />
        {viewingProduct && (
          <ProductDetailModal
            product={viewingProduct}
            onClose={handleCloseProduct}
            onView={handleViewProduct}
          />
        )}
      </div>
    </EnquiryProvider>
  );
}
