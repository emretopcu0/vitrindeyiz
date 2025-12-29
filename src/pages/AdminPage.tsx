import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { businessService, categoryService } from '../services/businessService';
import { Business, Category } from '../types/business';
import { seedDatabase, isDatabaseEmpty } from '../utils/seedDatabase';
import { Database, Plus, Users, Settings, BarChart3, Package, AlertCircle } from 'lucide-react';

const AdminPage: React.FC = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [stats, setStats] = useState({
    totalBusinesses: 0,
    totalCategories: 0,
    totalReviews: 0,
    avgRating: 0
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [businessesData, categoriesData] = await Promise.all([
        businessService.getAllBusinesses(),
        categoryService.getAllCategories()
      ]);
      
      setBusinesses(businessesData);
      setCategories(categoriesData);
      
      // Calculate stats
      const totalReviews = businessesData.reduce((sum, b) => sum + b.reviewCount, 0);
      const avgRating = businessesData.length > 0 
        ? businessesData.reduce((sum, b) => sum + b.rating, 0) / businessesData.length 
        : 0;
      
      setStats({
        totalBusinesses: businessesData.length,
        totalCategories: categoriesData.length,
        totalReviews,
        avgRating: parseFloat(avgRating.toFixed(1))
      });
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSeedDatabase = async () => {
    if (!window.confirm('Veritabanını örnek verilerle doldurmak istediğinizden emin misiniz?')) {
      return;
    }
    
    setSeeding(true);
    try {
      const success = await seedDatabase();
      if (success) {
        await loadData();
        alert('Veritabanı başarıyla dolduruldu!');
      }
    } catch (error) {
      console.error('Seeding failed:', error);
      alert('Veritabanı doldurma başarısız oldu!');
    } finally {
      setSeeding(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Database className="text-blue-600" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Vitrindeyiz Admin Panel</h1>
                <p className="text-gray-600">Veritabanı yönetimi ve istatistikler</p>
              </div>
            </div>
            <Link 
              to="/"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ana Sayfa
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <Package className="text-blue-600" size={24} />
              <span className="text-2xl font-bold text-gray-800">{stats.totalBusinesses}</span>
            </div>
            <h3 className="text-gray-600 font-medium">Toplam İşletme</h3>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="text-green-600" size={24} />
              <span className="text-2xl font-bold text-gray-800">{stats.totalCategories}</span>
            </div>
            <h3 className="text-gray-600 font-medium">Kategori</h3>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="text-purple-600" size={24} />
              <span className="text-2xl font-bold text-gray-800">{stats.totalReviews}</span>
            </div>
            <h3 className="text-gray-600 font-medium">Toplam Yorum</h3>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <Settings className="text-orange-600" size={24} />
              <span className="text-2xl font-bold text-gray-800">{stats.avgRating}</span>
            </div>
            <h3 className="text-gray-600 font-medium">Ortalama Puan</h3>
          </div>
        </div>

        {/* Database Actions */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Veritabanı İşlemleri</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <Database className="text-blue-600" size={24} />
                <h3 className="font-semibold text-gray-800">Veritabanını Doldur</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Örnek işletme ve kategori verilerini veritabanına ekleyin.
              </p>
              <button
                onClick={handleSeedDatabase}
                disabled={seeding}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {seeding ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Dolduruluyor...
                  </>
                ) : (
                  <>
                    <Plus size={16} />
                    Veritabanını Doldur
                  </>
                )}
              </button>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <AlertCircle className="text-orange-600" size={24} />
                <h3 className="font-semibold text-gray-800">Veritabanı Durumu</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">İşletmeler:</span>
                  <span className="font-medium">{stats.totalBusinesses}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kategoriler:</span>
                  <span className="font-medium">{stats.totalCategories}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Durum:</span>
                  <span className={`font-medium ${stats.totalBusinesses > 0 ? 'text-green-600' : 'text-orange-600'}`}>
                    {stats.totalBusinesses > 0 ? 'Aktif' : 'Boş'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Businesses */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Son Eklenen İşletmeler</h2>
          
          {businesses.length === 0 ? (
            <div className="text-center py-8">
              <Package className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-600">Henüz işletme eklenmemiş.</p>
              <button
                onClick={handleSeedDatabase}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                İlk İşletmeleri Ekle
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4 text-gray-600">İşletme Adı</th>
                    <th className="text-left py-2 px-4 text-gray-600">Kategori</th>
                    <th className="text-left py-2 px-4 text-gray-600">İlçe</th>
                    <th className="text-left py-2 px-4 text-gray-600">Puan</th>
                    <th className="text-left py-2 px-4 text-gray-600">Durum</th>
                  </tr>
                </thead>
                <tbody>
                  {businesses.slice(0, 10).map((business) => (
                    <tr key={business.id} className="border-b hover:bg-gray-50">
                      <td className="py-2 px-4">
                        <Link 
                          to={`/isletme/${business.id}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {business.name}
                        </Link>
                      </td>
                      <td className="py-2 px-4 text-gray-600">{business.category}</td>
                      <td className="py-2 px-4 text-gray-600">{business.district}</td>
                      <td className="py-2 px-4 text-gray-600">{business.rating}</td>
                      <td className="py-2 px-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          business.isOpen 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-red-100 text-red-600'
                        }`}>
                          {business.isOpen ? 'Açık' : 'Kapalı'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
