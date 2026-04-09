export const categories = [
  {
    id: 'women',
    name: 'Women',
    image: 'https://images.unsplash.com/photo-1760446031507-ed534e0f9605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b21lbiUyMGZhc2hpb24lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3NTczNTUxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Elegance redefined. Discover the latest ready-to-wear collection.'
  },
  {
    id: 'men',
    name: 'Men',
    image: 'https://images.unsplash.com/photo-1744551358258-5a5b9b268eca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZW4lMjBmYXNoaW9uJTIwbWluaW1hbHxlbnwxfHx8fDE3NzU3MzU1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Modern tailoring and sophisticated essentials for him.'
  },
  {
    id: 'bags',
    name: 'Bags',
    image: 'https://images.unsplash.com/photo-1758542988969-39a10168b2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsZWF0aGVyJTIwaGFuZGJhZyUyMGJsYWNrfGVufDF8fHx8MTc3NTczNTUxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Iconic craftsmanship. Explore our signature leather goods.'
  },
  {
    id: 'fragrances',
    name: 'Fragrances',
    image: 'https://images.unsplash.com/photo-1752520836249-2b8738e12664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwbWluaW1hbHxlbnwxfHx8fDE3NzU2NjQ1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Captivating scents. The essence of luxury in a bottle.'
  }
];

export const products = [
  // Women
  {
    id: 'w1',
    categoryId: 'women',
    name: 'Silk Crepe Midi Dress',
    description: 'A fluid silk crepe dress featuring an asymmetrical hemline and delicate draping at the bodice. Designed for effortless evening elegance.',
    details: ['100% Silk', 'Concealed zip fastening', 'Dry clean only', 'Made in Italy'],
    image: 'https://images.unsplash.com/photo-1768123881596-8451eb40608c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZWxlZ2FudCUyMGRyZXNzfGVufDF8fHx8MTc3NTczNTUxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1768123881596-8451eb40608c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZWxlZ2FudCUyMGRyZXNzfGVufDF8fHx8MTc3NTczNTUxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'w2',
    categoryId: 'women',
    name: 'Tailored Wool Coat',
    description: 'Structured double-breasted coat in pure virgin wool. Features peaked lapels and a minimal, clean silhouette.',
    details: ['100% Virgin Wool', 'Silk lining', 'Horn buttons', 'Made in Italy'],
    image: 'https://images.unsplash.com/photo-1760446031507-ed534e0f9605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b21lbiUyMGZhc2hpb24lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3NTczNTUxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1760446031507-ed534e0f9605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b21lbiUyMGZhc2hpb24lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3NTczNTUxMnww&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  // Men
  {
    id: 'm1',
    categoryId: 'men',
    name: 'Cashmere Blend Suit',
    description: 'Single-breasted suit tailored from a luxurious wool-cashmere blend. Unstructured shoulders for a relaxed yet refined fit.',
    details: ['90% Wool, 10% Cashmere', 'Notch lapels', 'Unlined construction', 'Made in Italy'],
    image: 'https://images.unsplash.com/photo-1585412459060-26478a8435b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjB0YWlsb3JlZCUyMHN1aXQlMjBkZXRhaWx8ZW58MXx8fHwxNzc1NzM1NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1585412459060-26478a8435b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjB0YWlsb3JlZCUyMHN1aXQlMjBkZXRhaWx8ZW58MXx8fHwxNzc1NzM1NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'm2',
    categoryId: 'men',
    name: 'Minimalist Overcoat',
    description: 'Sleek overcoat designed with clean lines and a hidden button placket. The ultimate outer layer for the modern wardrobe.',
    details: ['100% Cashmere', 'Hidden placket', 'Side welt pockets', 'Made in Italy'],
    image: 'https://images.unsplash.com/photo-1744551358258-5a5b9b268eca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZW4lMjBmYXNoaW9uJTIwbWluaW1hbHxlbnwxfHx8fDE3NzU3MzU1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1744551358258-5a5b9b268eca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZW4lMjBmYXNoaW9uJTIwbWluaW1hbHxlbnwxfHx8fDE3NzU3MzU1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  // Bags
  {
    id: 'b1',
    categoryId: 'bags',
    name: 'Signature Top Handle',
    description: 'Iconic structured bag in smooth calf leather. Features gold-finish hardware and a detachable shoulder strap.',
    details: ['100% Calf Leather', 'Gold-finish metalware', 'Nappa leather lining', 'Made in Italy'],
    image: 'https://images.unsplash.com/photo-1758542988969-39a10168b2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsZWF0aGVyJTIwaGFuZGJhZyUyMGJsYWNrfGVufDF8fHx8MTc3NTczNTUxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1758542988969-39a10168b2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsZWF0aGVyJTIwaGFuZGJhZyUyMGJsYWNrfGVufDF8fHx8MTc3NTczNTUxMnww&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  // Fragrances
  {
    id: 'f1',
    categoryId: 'fragrances',
    name: 'Oud Absolu',
    description: 'A deep, mysterious fragrance built around precious oud wood, lifted by bright citrus top notes and grounded with amber.',
    details: ['Eau de Parfum', '100ml / 3.4 fl oz', 'Notes: Bergamot, Oud, Amber', 'Made in France'],
    image: 'https://images.unsplash.com/photo-1752520836249-2b8738e12664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwbWluaW1hbHxlbnwxfHx8fDE3NzU2NjQ1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1752520836249-2b8738e12664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwbWluaW1hbHxlbnwxfHx8fDE3NzU2NjQ1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  }
];
