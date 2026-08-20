import { useState } from 'react';
import {
  TrendingDown,
  Package,
  Headphones,
  Layers,
  Tag,
  Handshake,
  ArrowRight,
  MessageCircle,
  Store,
  Truck,
  ShoppingCart,
  MapPin,
} from 'lucide-react';
import { buildDealerMessage, openWhatsApp, type EnquiryFormData } from '@/utils/whatsapp';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const benefits = [
  { icon: TrendingDown, title: 'Competitive Bulk Pricing', description: 'Dealer margins that support your business.' },
  { icon: Layers, title: 'Product Variety', description: 'Scooters and trampolines in one range.' },
  { icon: Headphones, title: 'Dealer Support', description: 'Responsive support for dealer partners.' },
  { icon: Tag, title: 'OEM Opportunities', description: 'Build your own brand with private-label options.' },
  { icon: Package, title: 'Bulk Ordering', description: 'Order at scale with accessible minimums.' },
  { icon: Handshake, title: 'Direct Manufacturer Relationship', description: 'Work directly with the source.' },
];

const targetCards = [
  { icon: Store, label: 'Toy Retailers' },
  { icon: ShoppingCart, label: 'Dealers' },
  { icon: Truck, label: 'Distributors' },
  { icon: Tag, label: 'Online Sellers' },
  { icon: MapPin, label: 'Regional Wholesalers' },
];

export default function Dealers() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    businessName: '',
    phone: '',
    city: '',
    additionalRequirement: '',
  });
  const revealRef = useScrollReveal<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(buildDealerMessage(formData));
  };

  return (
    <div className="bg-white min-h-screen" ref={revealRef}>
      {/* Hero */}
      <section className="bg-[#0B3D2E] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="section-label">Dealer Program</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
              Build Your Product Range
              <br />
              With MD Toys
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Partner with us as a dealer or distributor and access quality children's products at
              competitive trade pricing.
            </p>
            <button onClick={() => setShowForm(true)} className="btn-accent-lg">
              Become a Dealer <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Target audience */}
      <section className="py-10 border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {targetCards.map((card) => (
              <div key={card.label} className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg border border-gray-100 shadow-sm">
                <card.icon className="w-4 h-4 text-[#0B3D2E]" />
                <span className="font-semibold text-gray-700 text-sm">{card.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="section-label">Benefits</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3D2E] mb-3 tracking-tight">
              Dealer Benefits
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A partnership built around your growth and your customers' satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card-base card-hover p-6 reveal">
                <div className="w-12 h-12 rounded-xl bg-[#0B3D2E] flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#0B3D2E] text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Form */}
      <section className="section-pad bg-[#0B3D2E] text-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 reveal">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight">Become a Dealer</h2>
            <p className="text-white/70">Fill in your details and we'll continue on WhatsApp.</p>
          </div>

          {showForm ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 space-y-4 text-gray-900 shadow-2xl reveal">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input required type="text" value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-base" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Business Name <span className="text-red-400">*</span>
                </label>
                <input required type="text" value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="input-base" placeholder="Your business name" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Phone <span className="text-red-400">*</span>
                  </label>
                  <input required type="tel" value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-base" placeholder="Your phone" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    City <span className="text-red-400">*</span>
                  </label>
                  <input required type="text" value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="input-base" placeholder="Your city" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Additional Details</label>
                <textarea value={formData.additionalRequirement}
                  onChange={(e) => setFormData({ ...formData, additionalRequirement: e.target.value })}
                  rows={3} className="input-base resize-none"
                  placeholder="Tell us about your business, current product range, region..." />
              </div>
              <button type="submit" className="w-full btn-whatsapp-lg">
                <MessageCircle className="w-5 h-5" />
                Send via WhatsApp
              </button>
            </form>
          ) : (
            <div className="text-center reveal">
              <button onClick={() => setShowForm(true)} className="btn-accent-lg">
                Become a Dealer <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
