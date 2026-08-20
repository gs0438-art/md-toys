import { useState } from 'react';
import {
  Tag,
  Package,
  Wrench,
  Factory,
  MinusCircle,
  Layers,
  ArrowRight,
  MessageCircle,
  Check,
} from 'lucide-react';
import { buildOemMessage, openWhatsApp, type EnquiryFormData } from '@/utils/whatsapp';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const oemServices = [
  { icon: Tag, title: 'Custom Branding', description: 'Apply your brand identity to products.' },
  { icon: Package, title: 'Custom Packaging', description: 'Tailored packaging for your market.' },
  { icon: Layers, title: 'Private Label', description: 'Sell under your own brand name.' },
  { icon: Factory, title: 'Bulk Manufacturing', description: 'Production at scale for your demand.' },
  { icon: Wrench, title: 'Product Customization', description: 'Adapt products to your requirements.' },
  { icon: MinusCircle, title: 'Low MOQ Options', description: 'Start with accessible minimum orders.' },
];

const processSteps = [
  { number: '01', title: 'Requirement', desc: 'Share your product and branding needs' },
  { number: '02', title: 'Product Discussion', desc: 'Review options and specifications' },
  { number: '03', title: 'Branding', desc: 'Finalise branding and packaging design' },
  { number: '04', title: 'Sample', desc: 'Approve a pre-production sample' },
  { number: '05', title: 'Production', desc: 'Manufacturing at agreed quantity' },
  { number: '06', title: 'Dispatch', desc: 'Quality check and shipping' },
];

export default function OEM() {
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
    openWhatsApp(buildOemMessage(formData));
  };

  return (
    <div className="bg-white min-h-screen" ref={revealRef}>
      {/* Hero */}
      <section className="relative bg-[#0B3D2E] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.pexels.com/photos/6169055/pexels-photo-6169055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D2E] via-[#0B3D2E]/95 to-[#0B3D2E]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="section-label">OEM & Private Label</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
              Your Brand.
              <br />
              Our Manufacturing.
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              MD Toys works with businesses looking to launch or expand children's product ranges
              through OEM and private-label manufacturing.
            </p>
            <button onClick={() => setShowForm(true)} className="btn-accent-lg">
              Start OEM Discussion <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="section-label">Services</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3D2E] mb-3 tracking-tight">
              OEM Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Everything you need to bring your own branded children's products to market.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {oemServices.map((service) => (
              <div key={service.title} className="card-base card-hover p-6 reveal">
                <div className="w-12 h-12 rounded-xl bg-[#0B3D2E] flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#0B3D2E] text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="section-label">Process</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3D2E] mb-3 tracking-tight">
              OEM Process
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A clear six-step path from requirement to dispatch.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {processSteps.map((step) => (
              <div key={step.number} className="relative card-base p-6 reveal">
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-extrabold text-[#F59E0B] leading-none tracking-tight">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#0B3D2E] text-lg leading-tight">{step.title}</h3>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Form */}
      <section className="section-pad bg-[#0B3D2E] text-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 reveal">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight">Start OEM Discussion</h2>
            <p className="text-white/70">Share your requirement and we'll continue on WhatsApp.</p>
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
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Requirement</label>
                <textarea value={formData.additionalRequirement}
                  onChange={(e) => setFormData({ ...formData, additionalRequirement: e.target.value })}
                  rows={4} className="input-base resize-none"
                  placeholder="Describe your OEM requirement, product type, quantities, branding needs..." />
              </div>
              <button type="submit" className="w-full btn-whatsapp-lg">
                <MessageCircle className="w-5 h-5" />
                Send via WhatsApp
              </button>
            </form>
          ) : (
            <div className="text-center reveal">
              <button onClick={() => setShowForm(true)} className="btn-accent-lg">
                Start OEM Discussion <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-white/50">
                <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-[#F59E0B]" /> Low MOQ</span>
                <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-[#F59E0B]" /> Private Label</span>
                <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-[#F59E0B]" /> Custom Branding</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
