import React from 'react';
import { Eye, TrendingUp, Users, DollarSign } from 'lucide-react';

const CallToActionBanner: React.FC = () => {
  const benefits = [
    { icon: <Eye size={24} />, title: 'Daha Fazla Görünürlük' },
    { icon: <DollarSign size={24} />, title: 'Öngörülebilir Gelir' },
    { icon: <Users size={24} />, title: 'Yeni Müşteriler' },
    { icon: <TrendingUp size={24} />, title: 'Öngörülebilir Gelir' }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vitrindeyiz ile İstanbul'daki İşletmenizi Dijitalde Öne Çıkarın!
            </h2>
            
            <p className="text-xl text-blue-100 mb-8">
              İşletmenizin dijital vitrini ile müşteri sayınızı artırın!
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-white/20 p-3 rounded-lg">
                    {benefit.icon}
                  </div>
                  <span className="font-medium">{benefit.title}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Hemen Reklam Verin
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="Vitrindeyiz mobil uygulama"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
              />
              {/* Phone frame overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
