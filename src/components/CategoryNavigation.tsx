import React from 'react';
import { ChevronRight, Utensils, Car, Scissors, Wrench, Package } from 'lucide-react';

interface Category {
  name: string;
  count: number;
  icon: React.ReactNode;
}

const CategoryNavigation: React.FC = () => {
  const categories: Category[] = [
    { name: 'Restoranlar', count: 237, icon: <Utensils size={24} /> },
    { name: 'Oto Servisler', count: 174, icon: <Car size={24} /> },
    { name: 'Kuaförler', count: 133, icon: <Scissors size={24} /> },
    { name: 'Yapı Marketler', count: 129, icon: <Wrench size={24} /> },
    { name: 'Kırtasiyeler', count: 89, icon: <Package size={24} /> }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4 overflow-x-auto flex-1">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer min-w-fit"
              >
                <div className="text-blue-600">
                  {category.icon}
                </div>
                <div>
                  <div className="font-medium text-gray-800">{category.name}</div>
                  <div className="text-sm text-gray-500">{category.count} işletme</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex items-center gap-2 ml-4">
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap">
              Tüm Kategoriler (37)
            </a>
            <button className="text-blue-600 hover:text-blue-700">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryNavigation;
