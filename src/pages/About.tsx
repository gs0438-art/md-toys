import {
  Package,
  Building2,
  Wrench,
  Layers,
  ClipboardList,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import { brand } from '@/config/brand';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const focusAreas = [
  { icon: Package, title: 'Product-Focused Approach', description: 'Products designed around practical, everyday use for children.' },
  { icon: Building2, title: 'B2B Partnerships', description: 'Built around the needs of dealers, distributors and brand partners.' },
  { icon: Wrench, title: 'Practical Design', description: 'Dependable, functional products rather than novelty for its own sake.' },
  { icon: Layers, title: 'Product Variety', description: 'Scooters and trampolines, with a growing range of play products.' },
  { icon: TrendingUp, title: 'OEM Opportunities', description: 'Flexible manufacturing for brands looking to expand their range.' },
  { icon: ClipboardList, title: 'Enquiry-First Process', description: 'Fast quotations and communication through WhatsApp.' },
];

export default function About({ onNavigate }: AboutProps) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div className="bg-white min-h-screen" ref={revealRef}>
      {/* Hero */}
      <section className="bg-[#0B3D2E] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label">About Us</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight tracking-tight">
              A concept brand built for B2B
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              {brand.brandName} is a concept B2B children's products brand focused on making dependable,
              practical and engaging products for children while helping retailers and business partners
              build strong product ranges.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <span className="section-label">Our Approach</span>
              <h2 className="text-3xl font-extrabold text-[#0B3D2E] mb-4 tracking-tight">
                Product-first, partnership-driven
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                We focus on products that work — dependable designs, clear specifications and a range
                that supports retailers with multiple children's product categories.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Whether you're a toy shop, a distributor, an e-commerce seller or a brand exploring OEM
                and private label, {brand.brandName} is designed to be straightforward to work with.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg reveal">
              <img
                src="https://images.pexels.com/photos/5275453/pexels-photo-5275453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Children playing outdoors with scooters — lifestyle product shot"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="section-label">Focus</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3D2E] mb-3 tracking-tight">
              What We Focus On
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The principles that guide our product range and partnerships.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {focusAreas.map((area) => (
              <div key={area.title} className="card-base card-hover p-6 reveal">
                <div className="w-12 h-12 rounded-xl bg-[#0B3D2E]/5 flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-[#0B3D2E]" />
                </div>
                <h3 className="font-bold text-[#0B3D2E] text-lg mb-2">{area.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo notice */}
      <section className="py-14 bg-[#0B3D2E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-2xl font-extrabold mb-3 tracking-tight">A Demo Concept Website</h2>
          <p className="text-white/60 leading-relaxed max-w-2xl mx-auto mb-6">
            This website is a demo concept showcasing how a B2B children's products brand can present
            its range, enquiry process and OEM capabilities. Product images are for illustration.
          </p>
          <button onClick={() => onNavigate('products')} className="btn-accent-lg">
            Explore Products <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
