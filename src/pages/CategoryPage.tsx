import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, MapPin, Star, Phone, MessageCircle, Grid, List } from 'lucide-react';

interface Business {
  id: number;
  name: string;
  category: string;
  description: string;
  rating: number;
  reviewCount: number;
  phone: string;
  image: string;
  location: string;
  district: string;
  distance?: string;
  isOpen: boolean;
  priceRange: string;
}

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  // Mock business data based on category
  const mockBusinesses: Business[] = [
    {
      id: 1,
      name: 'Özdemir Yapı Market',
      category: 'Yapı Market',
      description: 'Tüm inşaat malzemeleri ve aletleri uygun fiyatlarla',
      rating: 4.8,
      reviewCount: 127,
      phone: '0212 555 1234',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      location: 'Levent Mahallesi, Büyükdere Cad. No:123',
      district: 'Beşiktaş',
      distance: '2.3 km',
      isOpen: true,
      priceRange: '₺₺'
    },
    {
      id: 2,
      name: 'Teknik Yapı Market',
      category: 'Yapı Market',
      description: 'Profesyonel inşaat malzemeleri ve teknik ekipmanlar',
      rating: 4.6,
      reviewCount: 89,
      phone: '0212 555 5678',
      image: 'https://images.unsplash.com/photo-1583827128706-bc794f9a3bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      location: 'Mecidiyeköy Mahallesi, Büyükdere Cad. No:45',
      district: 'Şişli',
      distance: '4.1 km',
      isOpen: true,
      priceRange: '₺₺₺'
    },
    {
      id: 3,
      name: 'Koçtaş',
      category: 'Yapı Market',
      description: 'Büyük zincir yapı market, geniş ürün yelpazesi',
      rating: 4.7,
      reviewCount: 234,
      phone: '0212 555 9012',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      location: 'Şişli Mahallesi, Abide-i Hürriyet Cad. No:89',
      district: 'Şişli',
      distance: '3.7 km',
      isOpen: false,
      priceRange: '₺₺'
    }
  ];

  const categoryInfo = {
    'yapi-marketler': {
      name: 'Yapı Marketler',
      description: 'İnşaat malzemeleri, aletler ve ekipmanlar',
      icon: '🔧',
      count: 129,
      color: 'bg-gray-100 text-gray-600'
    },
    'restoranlar': {
      name: 'Restoranlar',
      description: 'En iyi restoranlar ve kafeler',
      icon: '🍽️',
      count: 237,
      color: 'bg-orange-100 text-orange-600'
    },
    'kuaförler': {
      name: 'Kuaförler',
      description: 'Berber ve güzellik salonları',
      icon: '✂️',
      count: 133,
      color: 'bg-pink-100 text-pink-600'
    },
    'kafeler': {
      name: 'Kafeler',
      description: 'Kahve ve atıştırmalık mekanlar',
      icon: '☕',
      count: 156,
      color: 'bg-amber-100 text-amber-600'
    }
  };

  const currentCategory = categoryInfo[categoryName as keyof typeof categoryInfo] || {
    name: categoryName,
    description: 'İşletmeler',
    icon: '🏪',
    count: 0,
    color: 'bg-blue-100 text-blue-600'
  };

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      let filtered = mockBusinesses;
      
      // Filter by category
      if (categoryName) {
        filtered = filtered.filter(b => 
          b.category.toLowerCase().replace(' ', '-') === categoryName
        );
      }
      
      // Filter by district
      if (selectedDistrict) {
        filtered = filtered.filter(b => b.district === selectedDistrict);
      }
      
      setBusinesses(filtered);
      setLoading(false);
    }, 1000);
  }, [categoryName, selectedDistrict]);

  const renderStars = (rating: number, reviewCount: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
          />
        ))}
        <span className="text-sm font-medium ml-1">{rating}</span>
        <span className="text-sm text-gray-500 ml-1">({reviewCount})</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${currentCategory.color}`}>
              {currentCategory.icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{currentCategory.name}</h1>
              <p className="text-gray-600">{currentCategory.description}</p>
              <p className="text-sm text-gray-500 mt-1">{currentCategory.count} işletme</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="relevance">İlgili</option>
                  <option value="rating">En Yüksek Puan</option>
                  <option value="distance">En Yakın</option>
                  <option value="newest">En Yeni</option>
                </select>
              </div>
              
              <div>
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">Tüm İlçeler</option>
                  <option value="Beşiktaş">Beşiktaş</option>
                  <option value="Kadıköy">Kadıköy</option>
                  <option value="Şişli">Şişli</option>
                  <option value="Fatih">Fatih</option>
                  <option value="Beyoğlu">Beyoğlu</option>
                </select>
              </div>
            </div>
            
            <div className="text-sm text-gray-600">
              {businesses.length} işletme bulundu
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-6">
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : businesses.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">{currentCategory.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">İşletme Bulunamadı</h3>
            <p className="text-gray-600">Bu kategoride henüz işletme bulunmuyor.</p>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
            {businesses.map((business) => (
              <Link key={business.id} to={`/isletme/${business.id}`} className="block">
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div>
                      <div className="relative">
                        <img
                          src={business.image}
                          alt={business.name}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-medium ${
                          business.isOpen ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                        }`}>
                          {business.isOpen ? 'Açık' : 'Kapalı'}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{business.name}</h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{business.description}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <MapPin size={14} />
                          <span>{business.district}</span>
                          {business.distance && <span>• {business.distance}</span>}
                          <span className="font-medium">{business.priceRange}</span>
                        </div>
                        {renderStars(business.rating, business.reviewCount)}
                      </div>
                    </div>
                  ) : (
                    // List View
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4">
                        <div className="relative">
                          <img
                            src={business.image}
                            alt={business.name}
                            className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                          />
                          <div className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-medium ${
                            business.isOpen ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                          }`}>
                            {business.isOpen ? 'Açık' : 'Kapalı'}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{business.name}</h3>
                            <p className="text-gray-600 text-sm mb-2">{business.description}</p>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
                              <div className="flex items-center gap-1">
                                <MapPin size={14} />
                                {business.district}
                              </div>
                              {business.distance && <span>{business.distance}</span>}
                              <span className="font-medium">{business.priceRange}</span>
                            </div>
                            <p className="text-gray-500 text-sm">{business.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          {renderStars(business.rating, business.reviewCount)}
                          <div className="flex items-center gap-3">
                            <button 
                              onClick={(e) => e.stopPropagation()}
                              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
                            >
                              <Phone size={16} />
                              Telefon
                            </button>
                            <button 
                              onClick={(e) => e.stopPropagation()}
                              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                            >
                              <MessageCircle size={16} />
                              WhatsApp
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
