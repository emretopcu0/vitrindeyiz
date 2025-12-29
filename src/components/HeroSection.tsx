import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Mic } from 'lucide-react';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    category: '',
    district: '',
    keyword: ''
  });

  const categories = [
    'Restoranlar',
    'Oto Servisler',
    'Kuaförler',
    'Yapı Marketler',
    'Kırtasiyeler'
  ];

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchData.keyword) params.append('keyword', searchData.keyword);
    if (searchData.category) params.append('category', searchData.category);
    if (searchData.district) params.append('district', searchData.district);
    
    navigate(`/arama?${params.toString()}`);
  };

  const districts = [
    'Beşiktaş',
    'Kadıköy',
    'Şişli',
    'Fatih',
    'Beyoğlu'
  ];

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
          alt="Modern building with shops"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            İstanbul'un Dijital İşletme Vitrini
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl mb-12 text-blue-100">
            Istanbul'daki en güvenilir işletmeleri hızlıca keşfedin ve hemen iletişime geçin!
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-xl p-2 md:p-4">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              {/* Category Dropdown */}
              <select
                value={searchData.category}
                onChange={(e) => setSearchData({...searchData, category: e.target.value})}
                className="flex-1 px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="">Kategori Seç</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* District Dropdown */}
              <select
                value={searchData.district}
                onChange={(e) => setSearchData({...searchData, district: e.target.value})}
                className="flex-1 px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="">İlçe Seç</option>
                {districts.map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>

              {/* Keyword Input */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchData.keyword}
                  onChange={(e) => setSearchData({...searchData, keyword: e.target.value})}
                  placeholder="Anahtar Kelime"
                  className="w-full px-4 py-3 pr-12 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <Mic size={20} />
                </button>
              </div>

              {/* Search Button */}
              <button 
                onClick={handleSearch}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Search size={20} />
                Ara
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
