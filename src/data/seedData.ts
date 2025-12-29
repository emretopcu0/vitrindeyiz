import { Business, Category } from '../types/business';

// Sample business data for seeding
export const sampleBusinesses: Omit<Business, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    name: 'Özdemir Yapı Market',
    category: 'Yapı Market',
    description: '1985 yılından beri İstanbul\'un en güvenilir yapı marketlerinden biri olarak, kaliteli ürünler ve müşteri memnuniyeti odaklı hizmet anlayışıyla siz değerli müşterilerimize hizmet veriyoruz.',
    rating: 4.8,
    reviewCount: 127,
    phone: '0212 555 1234',
    email: 'info@ozdemiryapi.com',
    website: 'www.ozdemiryapi.com',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    location: 'Levent Mahallesi, Büyükdere Cad. No:123',
    district: 'Beşiktaş',
    distance: '2.3 km',
    isOpen: true,
    priceRange: '₺₺',
    address: 'Levent Mahallesi, Büyükdere Cad. No:123, Beşiktaş/İstanbul',
    workingHours: {
      'Pazartesi': '08:00 - 20:00',
      'Salı': '08:00 - 20:00',
      'Çarşamba': '08:00 - 20:00',
      'Perşembe': '08:00 - 20:00',
      'Cuma': '08:00 - 20:00',
      'Cumartesi': '09:00 - 18:00',
      'Pazar': '10:00 - 16:00'
    },
    features: [
      'Ücretsiz Teslimat (500TL ve üzeri)',
      'Kapıda Ödeme İmkanı',
      'Uzman Danışmanlık',
      'Garantili Ürünler',
      'Proje Fiyatlandırma',
      'Hızlı Teslimat'
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583827128706-bc794f9a3bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    ],
    socialMedia: {
      facebook: 'https://facebook.com/ozdemiryapi',
      instagram: 'https://instagram.com/ozdemiryapi'
    },
    verified: true
  },
  {
    name: 'Ünlü Oto Servis',
    category: 'Oto Servis',
    description: 'Profesyonel oto bakım ve onarım hizmetleri. 20 yıllık tecrübemizle aracınızın her türlü bakımını ve onarımını uzman kadromuzla yapıyoruz.',
    rating: 4.9,
    reviewCount: 89,
    phone: '0216 555 5678',
    email: 'info@unluotoservis.com',
    website: 'www.unluotoservis.com',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    location: 'Kadıköy Mahallesi, Fahrettin Kerim Gökay Cad. No:45',
    district: 'Kadıköy',
    distance: '5.1 km',
    isOpen: true,
    priceRange: '₺₺₺',
    address: 'Kadıköy Mahallesi, Fahrettin Kerim Gökay Cad. No:45, Kadıköy/İstanbul',
    workingHours: {
      'Pazartesi': '08:00 - 19:00',
      'Salı': '08:00 - 19:00',
      'Çarşamba': '08:00 - 19:00',
      'Perşembe': '08:00 - 19:00',
      'Cuma': '08:00 - 19:00',
      'Cumartesi': '09:00 - 17:00',
      'Pazar': 'Kapalı'
    },
    features: [
      'Oto Bakım',
      'Periyodik Bakım',
      'Klima Servisi',
      'Lastik Değişimi',
      'Oto Elektrik',
      'Mekanik Onarım'
    ],
    images: [
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    ],
    verified: true
  },
  {
    name: 'Elite Beauty Studio',
    category: 'Kuaför',
    description: 'Modern saç kesimi, boyama ve güzellik hizmetleri. Uzman kadromuzla en trend modelleri uyguluyor, müşterilerimizi mutlu ediyoruz.',
    rating: 4.9,
    reviewCount: 156,
    phone: '0212 555 9012',
    email: 'info@elitebeauty.com',
    website: 'www.elitebeauty.com',
    image: 'https://images.unsplash.com/photo-1560069002-3dba6dbb9ce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    location: 'Şişli Mahallesi, Abide-i Hürriyet Cad. No:89',
    district: 'Şişli',
    distance: '3.7 km',
    isOpen: false,
    priceRange: '₺₺',
    address: 'Şişli Mahallesi, Abide-i Hürriyet Cad. No:89, Şişli/İstanbul',
    workingHours: {
      'Pazartesi': '09:00 - 19:00',
      'Salı': '09:00 - 19:00',
      'Çarşamba': '09:00 - 19:00',
      'Perşembe': '09:00 - 19:00',
      'Cuma': '09:00 - 19:00',
      'Cumartesi': '09:00 - 18:00',
      'Pazar': 'Kapalı'
    },
    features: [
      'Saç Kesimi',
      'Saç Boyama',
      'Keratin Bakım',
      'Makyaj',
      'Manikür & Pedikür',
      'Gelin Saçı'
    ],
    images: [
      'https://images.unsplash.com/photo-1560069002-3dba6dbb9ce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    ],
    verified: true
  },
  {
    name: 'Levent Cafe',
    category: 'Kafe',
    description: 'Levent\'in kalbinde kahve keyfi. Özel kahve çekirdekleri, taze pastalar ve rahat atmosferiyle mükemmel bir mola noktası.',
    rating: 4.6,
    reviewCount: 234,
    phone: '0212 555 3456',
    email: 'info@leventcafe.com',
    website: 'www.leventcafe.com',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    location: 'Levent Mahallesi, Levent Cad. No:67',
    district: 'Beşiktaş',
    distance: '1.2 km',
    isOpen: true,
    priceRange: '₺',
    address: 'Levent Mahallesi, Levent Cad. No:67, Beşiktaş/İstanbul',
    workingHours: {
      'Pazartesi': '07:00 - 22:00',
      'Salı': '07:00 - 22:00',
      'Çarşamba': '07:00 - 22:00',
      'Perşembe': '07:00 - 22:00',
      'Cuma': '07:00 - 23:00',
      'Cumartesi': '08:00 - 23:00',
      'Pazar': '08:00 - 20:00'
    },
    features: [
      'Özel Kahve',
      'Taze Pastalar',
      'Kahvaltı',
      'Ücretsiz Wi-Fi',
      'Work Friendly',
      'Pet Friendly'
    ],
    images: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    ],
    verified: true
  },
  {
    name: 'FitLife Spor Salonu',
    category: 'Spor Salonu',
    description: 'Modern ekipmanlar, uzman antrenörler ve motive edici atmosfer. Sağlıklı yaşam tarzınıza başlamak için ideal adres.',
    rating: 4.7,
    reviewCount: 98,
    phone: '0212 555 7890',
    email: 'info@fitlife.com.tr',
    website: 'www.fitlife.com.tr',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    location: 'Mecidiyeköy Mahallesi, Büyükdere Cad. No:234',
    district: 'Şişli',
    distance: '4.5 km',
    isOpen: true,
    priceRange: '₺₺₺',
    address: 'Mecidiyeköy Mahallesi, Büyükdere Cad. No:234, Şişli/İstanbul',
    workingHours: {
      'Pazartesi': '06:00 - 23:00',
      'Salı': '06:00 - 23:00',
      'Çarşamba': '06:00 - 23:00',
      'Perşembe': '06:00 - 23:00',
      'Cuma': '06:00 - 23:00',
      'Cumartesi': '07:00 - 21:00',
      'Pazar': '07:00 - 20:00'
    },
    features: [
      'Fitness Alanı',
      'Grup Dersleri',
      'Kişisel Antrenör',
      'Sauna',
      'Spa',
      'Nutrition Danışmanlığı'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    ],
    verified: true
  }
];

// Sample categories
export const sampleCategories: Omit<Category, 'id'>[] = [
  {
    name: 'Yapı Market',
    description: 'İnşaat malzemeleri ve aletler',
    icon: '🔧',
    color: 'bg-gray-100 text-gray-600',
    count: 129
  },
  {
    name: 'Restoranlar',
    description: 'En iyi restoranlar ve kafeler',
    icon: '🍽️',
    color: 'bg-orange-100 text-orange-600',
    count: 237
  },
  {
    name: 'Oto Servis',
    description: 'Oto bakım ve onarım hizmetleri',
    icon: '🔧',
    color: 'bg-blue-100 text-blue-600',
    count: 174
  },
  {
    name: 'Kuaför',
    description: 'Berber ve güzellik salonları',
    icon: '✂️',
    color: 'bg-pink-100 text-pink-600',
    count: 133
  },
  {
    name: 'Kafe',
    description: 'Kahve ve atıştırmalık mekanlar',
    icon: '☕',
    color: 'bg-amber-100 text-amber-600',
    count: 156
  },
  {
    name: 'Spor Salonu',
    description: 'Fitness ve spor merkezleri',
    icon: '💪',
    color: 'bg-red-100 text-red-600',
    count: 67
  }
];
