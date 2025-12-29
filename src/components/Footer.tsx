import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Vitrin360 Nedir?',
      answer: 'Vitrin360, İstanbul\'daki işletmeleri dijital platformda bir araya getiren, müşterilerin kolayca işletme bulup iletişim kurabildiği modern bir işletme rehberidir.'
    },
    {
      question: 'İşletmemi nasıl ekleyebilirim?',
      answer: 'İşletmenizi eklemek için "Reklam Ver" bölümünden bizimle iletişime geçebilir veya iletişim formunu doldurarak size dönüş yapmamızı bekleyebilirsiniz.'
    },
    {
      question: 'Firma listeleme ücreti nedir?',
      answer: 'Firma listeleme ücretleri paketlere göre değişmektedir. Detaylı bilgi için "Reklam Ver" sayfamızı ziyaret edebilir veya bizimle iletişime geçebilirsiniz.'
    }
  ];

  const quickLinks = [
    'Ana Sayfa',
    'Sektörler', 
    'Reklam Ver',
    'İletişim'
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6">Sıkça Sorulan Sorular</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-700 pb-4">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left hover:text-blue-400 transition-colors"
                  >
                    <span className="font-medium">{faq.question}</span>
                    {expandedFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {expandedFAQ === index && (
                    <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Vitrin360</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              İstanbul'un en kapsamlı dijital işletme rehberi. Güvenilir işletmeleri keşfedin, 
              kolayca iletişim kurun ve işletmenizi dijital vitrine çıkarın. 
              Modern teknoloji ve kullanıcı dostu arayüz ile işletme bulma deneyimini yeniden tanımlıyoruz.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Hızlı Erişim</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Vitrin360. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kullanım Şartları
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Çerez Politikası
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
