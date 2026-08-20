import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { brand, whatsappLink, phoneLink } from '@/config/brand';
import { useEnquiry } from '@/context/EnquiryContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { openCart, totalItems } = useEnquiry();
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div className="bg-white min-h-screen" ref={revealRef}>
      {/* Header */}
      <section className="bg-[#0B3D2E] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="section-label">Contact</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">Get in Touch</h1>
            <p className="text-lg text-white/70 leading-relaxed">
              For dealer enquiries, bulk quotes, distributor pricing or OEM discussions — reach us
              directly on WhatsApp or phone.
            </p>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="section-pad">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {/* WhatsApp */}
            <div className="card-base p-8 text-center reveal" >
              <div className="w-16 h-16 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mx-auto mb-5">
                <MessageCircle className="w-8 h-8 text-[#25D366]" />
              </div>
              <h2 className="font-extrabold text-[#0B3D2E] text-xl mb-1.5">WhatsApp</h2>
              <p className="text-gray-400 text-sm mb-4">Fastest way to reach us</p>
              <p className="font-bold text-gray-800 text-lg mb-6">{brand.displayPhone}</p>
              <a
                href={whatsappLink('Hello MD Toys, I would like to enquire about your products.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-lg w-full"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>

            {/* Phone */}
            <div className="card-base p-8 text-center reveal">
              <div className="w-16 h-16 rounded-2xl bg-[#0B3D2E]/5 flex items-center justify-center mx-auto mb-5">
                <Phone className="w-8 h-8 text-[#0B3D2E]" />
              </div>
              <h2 className="font-extrabold text-[#0B3D2E] text-xl mb-1.5">Phone</h2>
              <p className="text-gray-400 text-sm mb-4">Call us directly</p>
              <p className="font-bold text-gray-800 text-lg mb-6">{brand.displayPhone}</p>
              <a href={phoneLink()} className="btn-primary-lg w-full">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>

          {/* Bulk quote CTA */}
          <div className="bg-[#0B3D2E] text-white rounded-2xl p-8 text-center reveal">
            <h2 className="text-2xl font-extrabold mb-3 tracking-tight">Request a Bulk Quote</h2>
            <p className="text-white/60 mb-6 max-w-xl mx-auto leading-relaxed">
              Add products to your enquiry cart and send a formatted quote request directly through
              WhatsApp.
            </p>
            <button onClick={openCart} className="btn-accent-lg">
              <MessageCircle className="w-5 h-5" />
              Request Bulk Quote{totalItems > 0 ? ` (${totalItems} items)` : ''}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-center text-xs text-gray-400 mt-8">
            We operate via WhatsApp and phone for all enquiries. This is a demo concept website.
          </p>
        </div>
      </section>
    </div>
  );
}
