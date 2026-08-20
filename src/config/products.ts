export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'scooters' | 'trampolines';
  shortDescription: string;
  description: string;
  startingPrice: number;
  image: string;
  galleryImages: string[];
  features: string[];
  specs: ProductSpec[];
  // Trampoline-specific
  diameter?: string;
  maxCapacity?: string;
  recommendedChildren?: string;
  ageSuitability?: string;
}

export const products: Product[] = [
  {
    id: 'mini-scooter',
    name: 'MD Toys Mini Scooter',
    category: 'scooters',
    shortDescription: 'Lightweight 3-wheel scooter with flashing wheels, ideal for young riders.',
    description:
      'The MD Toys Mini Scooter is a dependable everyday ride for young children. Its stable 3-wheel design, adjustable handle and wide anti-slip deck make it easy and safe for early riders, while the flashing PU wheels add a sense of fun without batteries.',
    startingPrice: 1499,
    image:
      'https://images.pexels.com/photos/16121234/pexels-photo-16121234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    galleryImages: [
      'https://images.pexels.com/photos/16121234/pexels-photo-16121234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/13378261/pexels-photo-13378261.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4127398/pexels-photo-4127398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      '3-wheel design',
      'Adjustable handle',
      'Wide anti-slip deck',
      'Rear brake',
      'Lightweight construction',
      'Flashing PU wheels',
    ],
    specs: [
      { label: 'Wheel count', value: '3' },
      { label: 'Wheels', value: 'Flashing PU' },
      { label: 'Brake', value: 'Rear brake' },
      { label: 'Deck', value: 'Wide anti-slip' },
      { label: 'Handle', value: 'Adjustable' },
      { label: 'Frame', value: 'Lightweight' },
    ],
    ageSuitability: '3–7 years',
  },
  {
    id: 'pro-scooter',
    name: 'MD Toys Pro Scooter',
    category: 'scooters',
    shortDescription: 'Reinforced foldable scooter with adjustable handlebar and flashing PU wheels.',
    description:
      'The MD Toys Pro Scooter is built for growing riders and everyday use. A reinforced frame, adjustable handlebar and foldable design combine durability with convenience, while the wide deck and flashing PU wheels keep the ride smooth and fun.',
    startingPrice: 1999,
    image:
      'https://images.pexels.com/photos/13378261/pexels-photo-13378261.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    galleryImages: [
      'https://images.pexels.com/photos/13378261/pexels-photo-13378261.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/35045989/pexels-photo-35045989.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/5275453/pexels-photo-5275453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      'Reinforced frame',
      'Adjustable handlebar',
      'Flashing PU wheels',
      'Rear brake',
      'Wide deck',
      'Foldable design',
    ],
    specs: [
      { label: 'Wheel count', value: '2' },
      { label: 'Wheels', value: 'Flashing PU' },
      { label: 'Brake', value: 'Rear brake' },
      { label: 'Deck', value: 'Wide' },
      { label: 'Handlebar', value: 'Adjustable' },
      { label: 'Frame', value: 'Reinforced, foldable' },
    ],
    ageSuitability: '5–12 years',
  },
  {
    id: 'bounce-24',
    name: 'MD Toys Bounce 24',
    category: 'trampolines',
    shortDescription: '24" indoor/outdoor trampoline with safety enclosure, ideal for one child.',
    description:
      'The MD Toys Bounce 24 is a compact, safety-focused trampoline for a single young child. A steel frame, padded poles and a safety enclosure provide a secure bouncing environment, while its size makes it suitable for both indoor and outdoor use.',
    startingPrice: 3499,
    image:
      'https://images.pexels.com/photos/35549420/pexels-photo-35549420.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    galleryImages: [
      'https://images.pexels.com/photos/35549420/pexels-photo-35549420.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/9342980/pexels-photo-9342980.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/35549422/pexels-photo-35549422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      'Safety enclosure',
      'Steel frame',
      'Padded poles',
      'Indoor/outdoor use',
    ],
    specs: [
      { label: 'Diameter', value: '24"' },
      { label: 'Max capacity', value: '25 kg' },
      { label: 'Recommended', value: '1 child' },
      { label: 'Use', value: 'Indoor / outdoor' },
    ],
    diameter: '24"',
    maxCapacity: '25 kg',
    recommendedChildren: '1 child',
    ageSuitability: '3–7 years',
  },
  {
    id: 'bounce-36',
    name: 'MD Toys Bounce 36',
    category: 'trampolines',
    shortDescription: '36" trampoline with 360° safety enclosure for up to two children.',
    description:
      'The MD Toys Bounce 36 offers more jumping space with a full 360° safety enclosure and a heavy-duty frame. With a higher capacity and room for up to two children, it is a practical choice for families and activity spaces.',
    startingPrice: 6499,
    image:
      'https://images.pexels.com/photos/35681081/pexels-photo-35681081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    galleryImages: [
      'https://images.pexels.com/photos/35681081/pexels-photo-35681081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/35681082/pexels-photo-35681082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4964542/pexels-photo-4964542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      '360° safety enclosure',
      'Heavy-duty frame',
      'Padded poles',
      'Safety-focused construction',
    ],
    specs: [
      { label: 'Diameter', value: '36"' },
      { label: 'Max capacity', value: '60 kg' },
      { label: 'Recommended', value: 'Up to 2 children' },
      { label: 'Use', value: 'Indoor / outdoor' },
    ],
    diameter: '36"',
    maxCapacity: '60 kg',
    recommendedChildren: 'Up to 2 children',
    ageSuitability: '3–10 years',
  },
  {
    id: 'bounce-55',
    name: 'MD Toys Bounce 55',
    category: 'trampolines',
    shortDescription: '55" large trampoline with 360° enclosure for up to 4–5 children.',
    description:
      'The MD Toys Bounce 55 is the largest in the range, offering a generous jumping area with a 360° safety enclosure and a heavy-duty steel frame. Built for up to 4–5 children, it suits larger families, schools and activity centres.',
    startingPrice: 10999,
    image:
      'https://images.pexels.com/photos/4964542/pexels-photo-4964542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    galleryImages: [
      'https://images.pexels.com/photos/4964542/pexels-photo-4964542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/14899640/pexels-photo-14899640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/32515780/pexels-photo-32515780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    features: [
      'Large jumping area',
      '360° safety enclosure',
      'Heavy-duty steel frame',
      'Padded poles',
      'Indoor/outdoor use',
    ],
    specs: [
      { label: 'Diameter', value: '55"' },
      { label: 'Max capacity', value: '80–100 kg' },
      { label: 'Recommended', value: 'Up to 4–5 children' },
      { label: 'Use', value: 'Indoor / outdoor' },
    ],
    diameter: '55"',
    maxCapacity: '80–100 kg',
    recommendedChildren: 'Up to 4–5 children',
    ageSuitability: '4–12 years',
  },
];

export const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/16121234/pexels-photo-16121234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Scooters',
    alt: 'Red kids scooter in a sunny park',
  },
  {
    url: 'https://images.pexels.com/photos/13378261/pexels-photo-13378261.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Scooters',
    alt: 'Blue kids scooter on a checkered floor',
  },
  {
    url: 'https://images.pexels.com/photos/5275453/pexels-photo-5275453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Scooters',
    alt: 'Child riding a scooter outdoors',
  },
  {
    url: 'https://images.pexels.com/photos/35045989/pexels-photo-35045989.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Scooters',
    alt: 'Yellow and orange scooters parked on a street',
  },
  {
    url: 'https://images.pexels.com/photos/4964542/pexels-photo-4964542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Trampolines',
    alt: 'Children jumping on an outdoor trampoline',
  },
  {
    url: 'https://images.pexels.com/photos/35681081/pexels-photo-35681081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Trampolines',
    alt: 'Two kids playing on a trampoline',
  },
  {
    url: 'https://images.pexels.com/photos/9342980/pexels-photo-9342980.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Trampolines',
    alt: 'Girls jumping on a trampoline',
  },
  {
    url: 'https://images.pexels.com/photos/14899640/pexels-photo-14899640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Trampolines',
    alt: 'Children playing energetically on a trampoline',
  },
  {
    url: 'https://images.pexels.com/photos/4127398/pexels-photo-4127398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Products',
    alt: 'Child riding a kick scooter on a sunny path',
  },
  {
    url: 'https://images.pexels.com/photos/5997696/pexels-photo-5997696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Products',
    alt: 'Child riding a toy vehicle in a playground',
  },
  {
    url: 'https://images.pexels.com/photos/6169055/pexels-photo-6169055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Packaging',
    alt: 'Cardboard boxes ready for shipping',
  },
  {
    url: 'https://images.pexels.com/photos/6169043/pexels-photo-6169043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Packaging',
    alt: 'Person organising cardboard boxes in a warehouse',
  },
  {
    url: 'https://images.pexels.com/photos/34221998/pexels-photo-34221998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Manufacturing',
    alt: 'Warehouse with stacked cardboard boxes for shipping',
  },
  {
    url: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Manufacturing',
    alt: 'Warehouse interior with organised shelves and pallets',
  },
];

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);

export const formatPrice = (price: number): string =>
  `₹${price.toLocaleString('en-IN')}`;
