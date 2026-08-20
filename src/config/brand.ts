export const brand = {
  brandName: 'MD Toys',
  tagline: 'Play. Move. Grow.',
  whatsappNumber: '918447010436',
  displayPhone: '+91 84470 10436',
  // Brand colours — used via Tailwind classes in components
  colors: {
    primary: '#0B3D2E', // deep forest green
    accent: '#F59E0B', // amber
  },
  email: null, // intentionally no email
  address: null, // intentionally no address
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${brand.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const phoneLink = () => `tel:+${brand.whatsappNumber}`;
