import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Phone, MessageCircle, MapPin } from 'lucide-react';

interface Business {
  id: number;
  name: string;
  description: string;
  rating: number;
  phone: string;
  image: string;
  category: string;
  location: string;
}

const BusinessListings: React.FC = () => {
  const businesses: Business[] = [
    {
      id: 1,
      name: 'Özdemir Yapı Market',
      description: 'Tüm inşaat malzemeleri ve aletleri uygun fiyatlarla',
      rating: 4.8,
      phone: '0212 555 1234',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      category: 'Yapı Market',
      location: 'Beşiktaş'
    },
    {
      id: 2,
      name: 'Ünlü Oto Servis',
      description: 'Profesyonel oto bakım ve onarım hizmetleri',
      rating: 4.9,
      phone: '0216 555 5678',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      category: 'Oto Servis',
      location: 'Kadıköy'
    },
    {
      id: 3,
      name: 'Sik Bayan Kuaförü',
      description: 'Modern saç kesimi ve güzellik hizmetleri',
      rating: 4.9,
      phone: '0212 555 9012',
      image: 'https://images.unsplash.com/photo-1560069002-3dba6dbb9ce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      category: 'Kuaför',
      location: 'Şişli'
    }
  ];

  const renderStars = (rating: number) => {
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
      </div>
    );
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          İstanbul'un En İyi İşletmelerini Keşfedin
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Business Cards */}
          <div className="lg:col-span-2 space-y-6">
            {businesses.map((business) => (
              <Link key={business.id} to={`/isletme/${business.id}`} className="block">
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="flex flex-col md:flex-row">
                    {/* Business Image */}
                    <div className="md:w-1/3">
                      <img
                        src={business.image}
                        alt={business.name}
                        className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                    </div>

                    {/* Business Info */}
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-1">
                            {business.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {business.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              {business.category}
                            </span>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              {business.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Rating and Contact */}
                      <div className="flex items-center justify-between mt-4">
                        {renderStars(business.rating)}
                        
                        <div className="flex items-center gap-3">
                          <div className="text-sm text-gray-600">
                            <Phone size={14} className="inline mr-1" />
                            {business.phone}
                          </div>
                          
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

          {/* Map */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-20">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">İşletme Haritası</h3>
              </div>
              <div className="h-96 bg-gray-200 relative">
                <img
                  src="https://images.unsplash.com/photo-1579398718797-99f4511f0236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="İstanbul Haritası"
                  className="w-full h-full object-cover"
                />
                {/* Map pins would be positioned absolutely here */}
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessListings;
