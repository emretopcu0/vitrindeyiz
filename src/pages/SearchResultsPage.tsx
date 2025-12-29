import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, MapPin, Star, Phone, MessageCircle, X, ChevronDown } from 'lucide-react';

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

const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const keyword = searchParams.get('keyword') || '';
  const category = searchParams.get('category') || '';
  const district = searchParams.get('district') || '';

  // Mock business data
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
      name: 'Ünlü Oto Servis',
      category: 'Oto Servis',
      description: 'Profesyonel oto bakım ve onarım hizmetleri',
      rating: 4.9,
      reviewCount: 89,
      phone: '0216 555 5678',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      location: 'Kadıköy Mahallesi, Fahrettin Kerim Gökay Cad. No:45',
      district: 'Kadıköy',
      distance: '5.1 km',
      isOpen: true,
      priceRange: '₺₺₺'
    },
    {
      id: 3,
      name: 'Sik Bayan Kuaförü',
      category: 'Kuaför',
      description: 'Modern saç kesimi ve güzellik hizmetleri',
      rating: 4.9,
      reviewCount: 156,
      phone: '0212 555 9012',
      image: 'https://images.unsplash.com/photo-1560069002-3dba6dbb9ce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      location: 'Şişli Mahallesi, Abide-i Hürriyet Cad. No:89',
      district: 'Şişli',
      distance: '3.7 km',
      isOpen: false,
      priceRange: '₺₺'
    },
    {
      id: 4,
      name: 'Levent Cafe',
      category: 'Kafe',
      description: 'Kahve ve atıştırmalık mekanlar',
      rating: 4.6,
      reviewCount: 234,
      phone: '0212 555 3456',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      location: 'Levent Mahallesi, Levent Cad. No:67',
      district: 'Beşiktaş',
      distance: '1.2 km',
      isOpen: true,
      priceRange: '₺'
    },
    {
      id: 5,
      name: 'FitLife Spor Salonu',
      category: 'Spor Salonu',
      description: 'Fitness ve spor merkezleri',
      rating: 4.7,
      reviewCount: 98,
      phone: '0212 555 7890',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      location: 'Mecidiyeköy Mahallesi, Büyükdere Cad. No:234',
      district: 'Şişli',
      distance: '4.5 km',
      isOpen: true,
      priceRange: '₺₺₺'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      let filtered = mockBusinesses;
      
      // Filter by keyword
      if (keyword) {
        filtered = filtered.filter(b => 
          b.name.toLowerCase().includes(keyword.toLowerCase()) ||
          b.description.toLowerCase().includes(keyword.toLowerCase())
        );
      }
      
      // Filter by category
      if (category) {
        filtered = filtered.filter(b => b.category === category);
      }
      
      // Filter by district
      if (district) {
        filtered = filtered.filter(b => b.district === district);
      }
      
      setBusinesses(filtered);
      setLoading(false);
    }, 1000);
  }, [keyword, category, district]);

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
      {/* Search Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {keyword || category || district ? 'Arama Sonuçları' : 'Tüm İşletmeler'}
              </h1>
              <p className="text-gray-600">
                {businesses.length} işletme bulundu
                {keyword && ` "${keyword}" için`}
                {category && ` ${category} kategorisinde`}
                {district && ` ${district} ilçesinde`}
              </p>
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter size={20} />
              Filtreler
              <ChevronDown size={16} className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          {/* Filters */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sıralama</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    <option value="relevance">İlgili</option>
                    <option value="rating">En Yüksek Puan</option>
                    <option value="distance">En Yakın</option>
                    <option value="newest">En Yeni</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Tüm Kategoriler</option>
                    <option value="Yapı Market">Yapı Market</option>
                    <option value="Oto Servis">Oto Servis</option>
                    <option value="Kuaför">Kuaför</option>
                    <option value="Kafe">Kafe</option>
                    <option value="Spor Salonu">Spor Salonu</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">İlçe</label>
                  <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Tüm İlçeler</option>
                    <option value="Beşiktaş">Beşiktaş</option>
                    <option value="Kadıköy">Kadıköy</option>
                    <option value="Şişli">Şişli</option>
                    <option value="Fatih">Fatih</option>
                    <option value="Beyoğlu">Beyoğlu</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fiyat Aralığı</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Tüm Fiyatlar</option>
                    <option value="₺">Ucuz (₺)</option>
                    <option value="₺₺">Orta (₺₺)</option>
                    <option value="₺₺₺">Pahalı (₺₺₺)</option>
                  </select>
                </div>
              </div>
            </div>
          )}
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
            <Search size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sonuç Bulunamadı</h3>
            <p className="text-gray-600">Arama kriterlerinize uygun işletme bulunamadı.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {businesses.map((business) => (
              <Link key={business.id} to={`/isletme/${business.id}`} className="block">
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="flex flex-col md:flex-row">
                    {/* Business Image */}
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

                    {/* Business Info */}
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 mb-1">
                            {business.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {business.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              {business.category}
                            </span>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              {business.district}
                            </div>
                            {business.distance && (
                              <div className="flex items-center gap-1">
                                <span>{business.distance}</span>
                              </div>
                            )}
                            <span className="font-medium">{business.priceRange}</span>
                          </div>
                          <p className="text-gray-500 text-sm">
                            {business.location}
                          </p>
                        </div>
                      </div>

                      {/* Rating and Contact */}
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
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
