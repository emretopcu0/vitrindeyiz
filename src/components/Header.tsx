import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              Vitrindeyiz
            </div>
            <div className="ml-2 text-sm text-gray-600 hidden md:block">
              İşletmene ait Vitrine
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${
                location.pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Ana Sayfa
            </Link>
            <Link 
              to="/sektorler" 
              className={`transition-colors ${
                location.pathname === '/sektorler' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Sektörler
            </Link>
            <Link 
              to="/reklam-ver" 
              className={`transition-colors ${
                location.pathname === '/reklam-ver' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Reklam Ver
            </Link>
            <Link 
              to="/iletisim" 
              className={`transition-colors ${
                location.pathname === '/iletisim' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              İletişim
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Phone size={16} />
              Bize Ulaşın
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors ${
                  location.pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link 
                to="/sektorler" 
                className={`transition-colors ${
                  location.pathname === '/sektorler' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sektörler
              </Link>
              <Link 
                to="/reklam-ver" 
                className={`transition-colors ${
                  location.pathname === '/reklam-ver' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Reklam Ver
              </Link>
              <Link 
                to="/iletisim" 
                className={`transition-colors ${
                  location.pathname === '/iletisim' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 w-fit">
                <Phone size={16} />
                Bize Ulaşın
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
