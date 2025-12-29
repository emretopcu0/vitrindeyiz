import React, { useState } from 'react';
import { Check, Star, Users, TrendingUp, Eye, Phone, Mail, MapPin, Building } from 'lucide-react';

interface Package {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  color: string;
}

const AdvertisePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    package: '',
    message: ''
  });

  const packages: Package[] = [
    {
      id: 'basic',
      name: 'Başlangıç',
      price: '299',
      period: '/ay',
      features: [
        'İşletme listeleme',
        'Temel bilgiler',
        'İletişim bilgileri',
        '1 kategori',
        'Standart görünüm'
      ],
      color: 'border-gray-300'
    },
    {
      id: 'professional',
      name: 'Profesyonel',
      price: '599',
      period: '/ay',
      popular: true,
      features: [
        'Öne çıkan listeleme',
        'Detaylı işletme profili',
        'Fotoğraf galerisi (10)',
        '3 kategori',
        'Öncelikli sıralama',
        'WhatsApp butonu',
        'Harita konumu'
      ],
      color: 'border-blue-500'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '999',
      period: '/ay',
      features: [
        'Premium listeleme',
        'Sınırsız fotoğraf',
        'Video ekleme',
        'Sınırsız kategori',
        'En üst sıralama',
        'Özel web sayfası',
        'Analitik raporlar',
        'Özel destek'
      ],
      color: 'border-purple-500'
    }
  ];

  const benefits = [
    { icon: <Eye size={24} />, title: 'Daha Fazla Görünürlük', description: 'İşletmeniz binlerce müşteriye ulaşır' },
    { icon: <Users size={24} />, title: 'Yeni Müşteriler', description: 'Her gün yeni müşteriler kazanın' },
    { icon: <TrendingUp size={24} />, title: 'Artan Ciro', description: 'Dijital varlık ile cironuzu artırın' },
    { icon: <Star size={24} />, title: 'Marka Bilinirliği', description: 'Markanızı güçlendirin' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Reklam talebiniz alınmıştır. En kısa sürede size dönüş yapacağız!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">İşletmenizi Öne Çıkarın!</h1>
          <p className="text-xl text-blue-100">
            Vitrin360 ile İstanbul'daki potansiyel müşterilerinize ulaşın
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Neden Vitrin360?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Reklam Paketleri</h2>
          <p className="text-gray-600 text-center mb-12">
            İşletmenize uygun paketi seçin ve hemen başlayın
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-lg shadow-lg p-8 border-2 ${pkg.color} ${
                  pkg.popular ? 'relative transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                      En Popüler
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-600">
                    ₺{pkg.price}
                    <span className="text-lg text-gray-500">{pkg.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check size={20} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setFormData({...formData, package: pkg.name})}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Bu Paketi Seç
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Reklam Talebi Gönderin</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-semibold mb-6">İletişim Bilgileri</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-blue-600" size={20} />
                    <span>+90 212 555 0123</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-blue-600" size={20} />
                    <span>reklam@vitrin360.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-blue-600" size={20} />
                    <span>Beşiktaş, İstanbul</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="text-blue-600" size={20} />
                    <span>Hafta içi 09:00 - 18:00</span>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Hızlı Başvuru</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Formu doldurun, sizinle iletişime geçelim!
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Star size={16} className="text-yellow-500" />
                    <span>24 saat içinde dönüş</span>
                  </div>
                </div>
              </div>
              
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Adınızı girin"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    İşletme Adı *
                  </label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="İşletme adını girin"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Telefon Numarası *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="05XX XXX XX XX"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    E-posta Adresi *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="ornek@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    İlgilendiğiniz Paket
                  </label>
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Paket seçin</option>
                    {packages.map((pkg) => (
                      <option key={pkg.id} value={pkg.name}>
                        {pkg.name} - ₺{pkg.price}/ay
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Eklemek istedikleriniz..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Talebi Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvertisePage;
