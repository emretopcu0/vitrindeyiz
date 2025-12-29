import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Car, Scissors, Wrench, Package, Coffee, Dumbbell, ShoppingBag, Heart, Home, Zap, Book, Briefcase, Camera, Music, Palette, Stethoscope, Truck, Plane, Hotel, School, Church, Building, TreePine, Gamepad2, Smartphone, Laptop, Pizza, Apple, Shirt, Sofa } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  count: number;
  description: string;
  color: string;
}

const SectorsPage: React.FC = () => {
  const categories: Category[] = [
    { id: '1', name: 'Restoranlar', icon: <Utensils size={32} />, count: 237, description: 'En iyi restoranlar ve kafeler', color: 'bg-orange-100 text-orange-600' },
    { id: '2', name: 'Oto Servisler', icon: <Car size={32} />, count: 174, description: 'Oto bakım ve onarım hizmetleri', color: 'bg-blue-100 text-blue-600' },
    { id: '3', name: 'Kuaförler', icon: <Scissors size={32} />, count: 133, description: 'Berber ve güzellik salonları', color: 'bg-pink-100 text-pink-600' },
    { id: '4', name: 'Yapı Marketler', icon: <Wrench size={32} />, count: 129, description: 'İnşaat malzemeleri ve aletler', color: 'bg-gray-100 text-gray-600' },
    { id: '5', name: 'Kırtasiyeler', icon: <Package size={32} />, count: 89, description: 'Ofis ve okul malzemeleri', color: 'bg-green-100 text-green-600' },
    { id: '6', name: 'Kafeler', icon: <Coffee size={32} />, count: 156, description: 'Kahve ve atıştırmalık mekanlar', color: 'bg-amber-100 text-amber-600' },
    { id: '7', name: 'Spor Salonları', icon: <Dumbbell size={32} />, count: 67, description: 'Fitness ve spor merkezleri', color: 'bg-red-100 text-red-600' },
    { id: '8', name: 'Mağazalar', icon: <ShoppingBag size={32} />, count: 298, description: 'Alışveriş mağazaları ve butikler', color: 'bg-purple-100 text-purple-600' },
    { id: '9', name: 'Sağlık', icon: <Heart size={32} />, count: 145, description: 'Hastaneler ve klinikler', color: 'bg-red-100 text-red-600' },
    { id: '10', name: 'Emlak', icon: <Home size={32} />, count: 189, description: 'Emlak ofisleri ve danışmanları', color: 'bg-indigo-100 text-indigo-600' },
    { id: '11', name: 'Elektrik', icon: <Zap size={32} />, count: 78, description: 'Elektrik hizmetleri ve tesisat', color: 'bg-yellow-100 text-yellow-600' },
    { id: '12', name: 'Eğitim', icon: <Book size={32} />, count: 234, description: 'Okullar ve eğitim merkezleri', color: 'bg-teal-100 text-teal-600' },
    { id: '13', name: 'Danışmanlık', icon: <Briefcase size={32} />, count: 92, description: 'İş ve profesyonel danışmanlık', color: 'bg-slate-100 text-slate-600' },
    { id: '14', name: 'Fotoğraf', icon: <Camera size={32} />, count: 45, description: 'Fotoğraf stüdyoları ve hizmetleri', color: 'bg-violet-100 text-violet-600' },
    { id: '15', name: 'Müzik', icon: <Music size={32} />, count: 38, description: 'Müzik dükkanları ve okulları', color: 'bg-rose-100 text-rose-600' },
    { id: '16', name: 'Sanat', icon: <Palette size={32} />, count: 56, description: 'Sanat galerileri ve malzemeleri', color: 'bg-cyan-100 text-cyan-600' },
    { id: '17', name: 'Hastaneler', icon: <Stethoscope size={32} />, count: 87, description: 'Tıp merkezleri ve hastaneler', color: 'bg-red-100 text-red-600' },
    { id: '18', name: 'Nakliyat', icon: <Truck size={32} />, count: 123, description: 'Taşıma ve nakliye hizmetleri', color: 'bg-orange-100 text-orange-600' },
    { id: '19', name: 'Seyahat', icon: <Plane size={32} />, count: 98, description: 'Seyahat acenteleri ve turizm', color: 'bg-sky-100 text-sky-600' },
    { id: '20', name: 'Oteller', icon: <Hotel size={32} />, count: 167, description: 'Konaklama ve otel hizmetleri', color: 'bg-emerald-100 text-emerald-600' },
    { id: '21', name: 'Eğitim Merkezleri', icon: <School size={32} />, count: 145, description: 'Özel eğitim ve kurs merkezleri', color: 'bg-blue-100 text-blue-600' },
    { id: '22', name: 'Dini Tesisler', icon: <Church size={32} />, count: 234, description: 'Camiler ve dini mekanlar', color: 'bg-green-100 text-green-600' },
    { id: '23', name: 'Camiler', icon: <Building size={32} />, count: 189, description: 'İbadethaneler ve camiler', color: 'bg-green-100 text-green-600' },
    { id: '24', name: 'Bahçe', icon: <TreePine size={32} />, count: 67, description: 'Bahçe düzenleme ve peyzaj', color: 'bg-green-100 text-green-600' },
    { id: '25', name: 'Oyun', icon: <Gamepad2 size={32} />, count: 89, description: 'Oyun konsolları ve mağazaları', color: 'bg-purple-100 text-purple-600' },
    { id: '26', name: 'Teknoloji', icon: <Smartphone size={32} />, count: 178, description: 'Teknoloji ürünleri ve servisler', color: 'bg-blue-100 text-blue-600' },
    { id: '27', name: 'Bilgisayar', icon: <Laptop size={32} />, count: 156, description: 'Bilgisayar satış ve servis', color: 'bg-gray-100 text-gray-600' },
    { id: '28', name: 'Fast Food', icon: <Pizza size={32} />, count: 198, description: 'Hızlı yiyecek ve restoranlar', color: 'bg-red-100 text-red-600' },
    { id: '29', name: 'Marketler', icon: <Apple size={32} />, count: 267, description: 'Süpermarketler ve gıda', color: 'bg-green-100 text-green-600' },
    { id: '30', name: 'Giyim', icon: <Shirt size={32} />, count: 312, description: 'Giyim mağazaları ve butikler', color: 'bg-pink-100 text-pink-600' },
    { id: '31', name: 'Mobilya', icon: <Sofa size={32} />, count: 134, description: 'Mobilya mağazaları ve dekorasyon', color: 'bg-amber-100 text-amber-600' },
    { id: '32', name: 'Diğer', icon: <Package size={32} />, count: 445, description: 'Diğer kategoriler', color: 'bg-gray-100 text-gray-600' },
    { id: '33', name: 'Temizlik', icon: <Package size={32} />, count: 98, description: 'Temizlik hizmetleri ve ürünler', color: 'bg-blue-100 text-blue-600' },
    { id: '34', name: 'Tamirat', icon: <Wrench size={32} />, count: 76, description: 'Tamirat ve bakım hizmetleri', color: 'bg-orange-100 text-orange-600' },
    { id: '35', name: 'Pet Shop', icon: <Heart size={32} />, count: 54, description: 'Evcil hayvan ürünleri ve kliniği', color: 'bg-pink-100 text-pink-600' },
    { id: '36', name: 'Emlak Danışmanlığı', icon: <Home size={32} />, count: 203, description: 'Gayrimenkul danışmanlığı', color: 'bg-indigo-100 text-indigo-600' },
    { id: '37', name: 'Avukatlık', icon: <Briefcase size={32} />, count: 87, description: 'Hukuk büroları ve avukatlar', color: 'bg-slate-100 text-slate-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">İşletme Sektörleri</h1>
          <p className="text-xl text-blue-100">
            İstanbul'daki tüm işletme kategorilerini keşfedin. Toplam {categories.reduce((sum, cat) => sum + cat.count, 0)}+ işletme
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/kategori/${category.name.toLowerCase().replace(' ', '-')}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">
                      {category.count}
                    </span>
                    <span className="text-gray-500 text-sm">
                      işletme
                    </span>
                  </div>
                  
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    İşletmeleri Gör
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">37</div>
              <div className="text-blue-100">Kategori</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4,567+</div>
              <div className="text-blue-100">İşletme</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">39</div>
              <div className="text-blue-100">İlçe</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Hizmet</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectorsPage;
