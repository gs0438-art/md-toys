import {
  MessageCircle,
  Phone,
  ArrowRight,
  Package,
  Tag,
  ShieldCheck,
  Headphones,
  MinusCircle,
  Globe,
  Wrench,
  Building2,
  Layers,
  ClipboardList,
  TrendingUp,
} from 'lucide-react';
import { brand, whatsappLink, phoneLink } from '@/config/brand';
import { products, formatPrice } from '@/config/products';
import ProductCard from '@/components/ProductCard';
import { useEnquiry } from '@/context/EnquiryContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface HomeProps {
  onNavigate: (page: string) => void;
  onViewProduct: (productId: string) => void;
}

const trustItems = [
  { icon: Package, label: 'B2B Bulk Supply' },
  { icon: Tag, label: 'OEM & Private Label' },
  { icon: Headphones, label: 'Dealer Support' },
  { icon: ShieldCheck, label: 'Product-Focused' },
  { icon: MinusCircle, label: 'Low MOQ Options' },
  { icon: MessageCircle, label: 'WhatsApp Enquiries' },
];

const whyItems = [
  { icon: Package, title: 'Product-Focused', description: 'Designed around practical everyday use.' },
  { icon: Building2, title: 'B2B Ready', description: 'Built around dealer and bulk requirements.' },
  { icon: Wrench, title: 'OEM Friendly', description: 'Flexible opportunities for branding and private label.' },
  { icon: Layers, title: 'Clear Specifications', description: 'Easy-to-understand product information.' },
  { icon: ClipboardList, title: 'Simple Enquiries', description: 'Fast quotation and communication through WhatsApp.' },
  { icon: TrendingUp, title: 'Growing Product Range', description: "Multiple children's product categories for retailers." },
];

const buyerBenefits = [
  'Clear product specifications',
  'Straightforward bulk enquiries',
  'OEM-ready approach',
  'Dealer-focused support',
  'Professional product presentation',
];

export default function Home({ onNavigate, onViewProduct }: HomeProps) {
  const { openCart, totalItems } = useEnquiry();
  const featuredProducts = products.slice(0, 4);
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      {/* === Hero === */}
      <section className="relative bg-[#0B3D2E] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.pexels.com/photos/16121234/pexels-photo-16121234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D2E] via-[#0B3D2E]/92 to-[#0B3D2E]/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/10">
              <span className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse" />
              B2B Children's Products Manufacturer
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-5 tracking-tight">
              Built for Play.
              <br />
              Made for Everyday Adventures.
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
              Kids' scooters, trampolines and play products for retailers, dealers, distributors and
              growing brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onNavigate('products')}
                className="btn-accent-lg"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => openCart()}
                className="btn-ghost-lg"
              >
                Request Bulk Quote{totalItems > 0 ? ` (${totalItems})` : ''}
              </button>
            </div>
            {/* Quick stats bar */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10">
              <div>
                <p className="text-2xl font-extrabold text-[#F59E0B]">2</p>
                <p className="text-xs text-white/60 font-medium">Product Categories</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <p className="text-2xl font-extrabold text-[#F59E0B]">5</p>
                <p className="text-xs text-white/60 font-medium">Product Models</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <p className="text-2xl font-extrabold text-[#F59E0B]">OEM</p>
                <p className="text-xs text-white/60 font-medium">Private Label Ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Trust section === */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center gap-2 p-2"
              >
                <div className="w-11 h-11 rounded-lg bg-[#0B3D2E]/5 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#0B3D2E]" />
                </div>
                <span className="text-xs font-semibold text-gray-600 leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Categories === */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="section-label">Product Range</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3D2E] mb-3 tracking-tight">
              Two Categories. One Supplier.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Built for everyday play, made for reliable supply to retailers and distributors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Scooters */}
            <button
              onClick={() => onNavigate('products')}
              className="group relative overflow-hidden rounded-2xl aspect-[16/10] text-left shadow-md"
            >
              <img
                src="https://images.pexels.com/photos/13378261/pexels-photo-13378261.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Kids scooters category — 3-wheel and pro models for B2B supply"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E] via-[#0B3D2E]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <h3 className="text-2xl font-bold mb-1">Kids Scooters</h3>
                <p className="text-white/70 text-sm mb-3">3-wheel and pro models with flashing PU wheels</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#F59E0B] group-hover:gap-2.5 transition-all">
                  View Range <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </button>

            {/* Trampolines */}
            <button
              onClick={() => onNavigate('products')}
              className="group relative overflow-hidden rounded-2xl aspect-[16/10] text-left shadow-md"
            >
              <img
                src="https://images.pexels.com/photos/4964542/pexels-photo-4964542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Kids trampolines category — 24, 36 and 55 inch with safety enclosures"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E] via-[#0B3D2E]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <h3 className="text-2xl font-bold mb-1">Trampolines</h3>
                <p className="text-white/70 text-sm mb-3">24", 36" and 55" with safety enclosures</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#F59E0B] group-hover:gap-2.5 transition-all">
                  View Range <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* === Featured products === */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 reveal">
            <div>
              <span className="section-label">Featured</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3D2E] tracking-tight">
                Featured Products
              </h2>
              <p className="text-gray-500 mt-2">A selection from our scooter and trampoline ranges.</p>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 text-[#0B3D2E] font-bold hover:gap-3 transition-all"
            >
              View All Products <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onView={onViewProduct} />
            ))}
          </div>
        </div>
      </section>

      {/* === OEM banner === */}
      <section className="section-pad bg-[#0B3D2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <span className="section-label">OEM & Private Label</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight tracking-tight">
                Your Brand.
                <br />
                Our Manufacturing.
              </h2>
              <p className="text-white/70 leading-relaxed mb-6 max-w-lg">
                MD Toys works with businesses looking to launch or expand children's product ranges
                through OEM and private-label manufacturing.
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8">
                {[
                  'Custom Branding',
                  'Custom Packaging',
                  'Private Label',
                  'Bulk Manufacturing',
                  'Low MOQ Options',
                  'Product Customization',
                ].map((service) => (
                  <div key={service} className="flex items-center gap-2.5 text-sm font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNavigate('oem')}
                className="btn-accent-lg"
              >
                Start OEM Discussion <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl reveal">
              <img
                src="https://images.pexels.com/photos/6169043/pexels-photo-6169043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="OEM manufacturing and packaging for B2B children's products"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* === Why MD Toys === */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="section-label">Why MD Toys</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3D2E] mb-3 tracking-tight">
              Why Partner With MD Toys?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Built around the needs of retailers, dealers and growing brands.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="card-base card-hover p-6 reveal"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B3D2E]/5 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#0B3D2E]" />
                </div>
                <h3 className="font-bold text-[#0B3D2E] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Pricing === */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="section-label">Pricing</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3D2E] mb-3 tracking-tight">
              Product Pricing
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Indicative demo pricing for reference. Dealer, distributor, bulk and OEM pricing
              available on request.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 reveal">
            {products.map((product) => (
              <div
                key={product.id}
                className="card-base card-hover p-5 text-center"
              >
                <h3 className="font-semibold text-[#0B3D2E] text-sm leading-tight mb-3 min-h-[2.5rem]">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-400 font-medium">From</p>
                <p className="text-2xl font-extrabold text-[#0B3D2E] tracking-tight">
                  {formatPrice(product.startingPrice)}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6 max-w-2xl mx-auto">
            Indicative demo pricing. Dealer, distributor, bulk and OEM pricing available on request.
          </p>
        </div>
      </section>

      {/* === Buyer benefits === */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="section-label">B2B Focus</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3D2E] mb-3 tracking-tight">
              What B2B Buyers Look For
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The qualities that matter to retailers, dealers and brand partners.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 reveal">
            {buyerBenefits.map((benefit) => (
              <div
                key={benefit}
                className="card-base card-hover p-5 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#F59E0B]/10 flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <p className="font-semibold text-[#0B3D2E] text-sm leading-snug">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Contact CTA === */}
      <section className="section-pad bg-[#0B3D2E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Ready to Talk?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            Get in touch for dealer enquiries, bulk quotes, distributor pricing or OEM discussions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsappLink('Hello MD Toys, I would like to enquire about your products.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Talk to Us on WhatsApp
            </a>
            <a
              href={phoneLink()}
              className="btn-ghost-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-accent-lg"
            >
              Request Bulk Quote
            </button>
          </div>
          <p className="mt-8 text-white/50 text-sm font-medium">{brand.displayPhone}</p>
        </div>
      </section>
    </div>
  );
}
