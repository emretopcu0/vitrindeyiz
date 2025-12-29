import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Phone, MessageCircle, MapPin, Clock, Share2, Heart, ChevronLeft, ChevronRight, Mail, Globe, Facebook, Twitter, Instagram } from 'lucide-react';

interface Business {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  phone: string;
  email: string;
  website: string;
  address: string;
  district: string;
  description: string;
  features: string[];
  workingHours: {
    [key: string]: string;
  };
  images: string[];
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

const BusinessDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  // Mock business data - in real app, this would come from API
  const business: Business = {
    id: id || '1',
    name: 'Özdemir Yapı Market',
    category: 'Yapı Market',
    rating: 4.8,
    reviewCount: 127,
    phone: '0212 555 1234',
    email: 'info@ozdemiryapi.com',
    website: 'www.ozdemiryapi.com',
    address: 'Levent Mahallesi, Büyükdere Cad. No:123',
    district: 'Beşiktaş',
    description: '1985 yılından beri İstanbul\'un en güvenilir yapı marketlerinden biri olarak, kaliteli ürünler ve müşteri memnuniyeti odaklı hizmet anlayışıyla siz değerli müşterilerimize hizmet veriyoruz. Geniş ürün yelpazemiz ve uzman kadromuzla tüm inşaat ve tadilat ihtiyaçlarınız için tek adresiniz.',
    features: [
      'Ücretsiz Teslimat (500TL ve üzeri)',
      'Kapıda Ödeme İmkanı',
      'Uzman Danışmanlık',
      'Garantili Ürünler',
      'Proje Fiyatlandırma',
      'Hızlı Teslimat'
    ],
    workingHours: {
      'Pazartesi': '08:00 - 20:00',
      'Salı': '08:00 - 20:00',
      'Çarşamba': '08:00 - 20:00',
      'Perşembe': '08:00 - 20:00',
      'Cuma': '08:00 - 20:00',
      'Cumartesi': '09:00 - 18:00',
      'Pazar': '10:00 - 16:00'
    },
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583827128706-bc794f9a3bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589937056031-5c2910d2f8ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    ],
    socialMedia: {
      facebook: 'https://facebook.com/ozdemiryapi',
      instagram: 'https://instagram.com/ozdemiryapi'
    }
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? business.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === business.images.length - 1 ? 0 : prev + 1
    );
  };

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
        <span className="text-sm text-gray-500 ml-1">({business.reviewCount} değerlendirme)</span>
      </div>
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: business.name,
        text: business.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link kopyalandı!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Ana Sayfa</Link>
            <span className="text-gray-400">/</span>
            <Link to="/sektorler" className="text-gray-600 hover:text-blue-600">Sektörler</Link>
            <span className="text-gray-400">/</span>
            <Link to={`/kategori/${business.category}`} className="text-gray-600 hover:text-blue-600">{business.category}</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800">{business.name}</span>
          </nav>
        </div>
      </div>

      {/* Business Header */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Images */}
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src={business.images[currentImageIndex]}
                  alt={business.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
                
                {/* Image Navigation */}
                {business.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePreviousImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
                
                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {business.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {business.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? 'border-blue-600' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${business.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Business Info */}
            <div className="lg:w-1/2">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{business.name}</h1>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {business.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-600">
                      <MapPin size={16} />
                      <span>{business.district}</span>
                    </div>
                  </div>
                  {renderStars(business.rating)}
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsSaved(!isSaved)}
                    className={`p-3 rounded-lg transition-colors ${
                      isSaved ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Heart size={20} fill={isSaved ? 'currentColor' : 'none'} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{business.description}</p>

              {/* Contact Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <a
                  href={`tel:${business.phone}`}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  {business.phone}
                </a>
                <a
                  href={`https://wa.me/905551234567`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>

              {/* Quick Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="text-gray-400" size={20} />
                  <a href={`mailto:${business.email}`} className="text-gray-700 hover:text-blue-600">
                    {business.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="text-gray-400" size={20} />
                  <a href={`https://${business.website}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                    {business.website}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-gray-400" size={20} />
                  <span className="text-gray-700">{business.address}</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={20} className="text-gray-600" />
                  <h3 className="font-semibold text-gray-800">Çalışma Saatleri</h3>
                </div>
                <div className="space-y-2">
                  {Object.entries(business.workingHours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-gray-600">{day}</span>
                      <span className="text-gray-800 font-medium">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              {Object.keys(business.socialMedia).length > 0 && (
                <div className="flex gap-3">
                  {business.socialMedia.facebook && (
                    <a
                      href={business.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <Facebook size={18} />
                    </a>
                  )}
                  {business.socialMedia.instagram && (
                    <a
                      href={business.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-8 bg-white border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Özellikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {business.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Konum</h2>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
            <img
              src="https://images.unsplash.com/photo-1579398718797-99f4511f0236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Harita"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Müşteri Yorumları</h2>
          <div className="space-y-6">
            {/* Mock Reviews */}
            <div className="border-b pb-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">A</span>
                </div>
                <div>
                  <h4 className="font-semibold">Ahmet K.</h4>
                  <div className="flex items-center gap-2">
                    {renderStars(5)}
                    <span className="text-sm text-gray-500">2 gün önce</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                Çok kaliteli ürünler ve hızlı teslimat. Personel çok yardımcı oldu. Kesinlikle tavsiye ederim.
              </p>
            </div>
            
            <div className="border-b pb-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">M</span>
                </div>
                <div>
                  <h4 className="font-semibold">Mehmet S.</h4>
                  <div className="flex items-center gap-2">
                    {renderStars(4)}
                    <span className="text-sm text-gray-500">1 hafta önce</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                Fiyatlar uygun, ürün çeşitliliği iyi. Sadece park sorunu yaşıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessDetailPage;
