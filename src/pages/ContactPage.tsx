import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Facebook, Twitter, Instagram, Linkedin, Building } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo: ContactInfo[] = [
    {
      icon: <Phone size={24} />,
      title: 'Telefon',
      details: ['+90 212 555 0123', '+90 216 555 0456', 'Hafta içi 09:00 - 18:00']
    },
    {
      icon: <Mail size={24} />,
      title: 'E-posta',
      details: ['info@vitrin360.com', 'destek@vitrin360.com', 'reklam@vitrin360.com']
    },
    {
      icon: <MapPin size={24} />,
      title: 'Adres',
      details: ['Levent Mahallesi, İstanbul', 'Beşiktaş, Türkiye', '34330']
    },
    {
      icon: <Clock size={24} />,
      title: 'Çalışma Saatleri',
      details: ['Pazartesi - Cuma: 09:00 - 18:00', 'Cumartesi: 10:00 - 16:00', 'Pazar: Kapalı']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">İletişim</h1>
          <p className="text-xl text-blue-100">
            Sorularınızı ve görüşlerinizi bekliyoruz. Size nasıl yardımcı olabiliriz?
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Bize Ulaşın</h2>
              
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
                    E-posta Adresiniz *
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
                    Konu *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Mesaj konusu"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Mesajı Gönder
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Konumumuz</h2>
              
              {/* Map */}
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-8 h-96">
                <img
                  src="https://images.unsplash.com/photo-1579398718797-99f4511f0236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Vitrin360 Ofis Haritası"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Quick Contact */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Hızlı İletişim</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+902125550123"
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Phone size={20} />
                    <span>+90 212 555 0123</span>
                  </a>
                  <a
                    href="mailto:info@vitrin360.com"
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Mail size={20} />
                    <span>info@vitrin360.com</span>
                  </a>
                  <a
                    href="https://wa.me/905551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp Destek</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sıkça Sorulan Sorular</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Vitrindeyiz nedir?</h3>
              <p className="text-gray-600">
                Vitrindeyiz, İstanbul'daki işletmeleri dijital platformda bir araya getiren, 
                müşterilerin kolayca işletme bulup iletişim kurabildiği modern bir işletme rehberidir.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">İşletmemi nasıl ekleyebilirim?</h3>
              <p className="text-gray-600">
                "Reklam Ver" sayfamızdan size uygun paketi seçerek veya iletişim formunu doldurarak 
                işletmenizi ekleyebilirsiniz. Ekibimiz size en kısa sürede dönüş yapacaktır.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Ücretli mi?</h3>
              <p className="text-gray-600">
                Temel listeleme ücretsizdir, ancak öne çıkmak ve daha fazla müşteriye ulaşmak için 
                farklı fiyat paketlerimiz mevcuttur.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Müşteri desteği var mı?</h3>
              <p className="text-gray-600">
                Evet, hafta içi 09:00 - 18:00 saatleri arasında telefon, e-posta ve WhatsApp 
                üzerinden müşteri desteği sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Bizi Takip Edin</h2>
          <p className="text-gray-400 mb-8">
            Sosyal medya hesaplarımızdan güncel duyuruları takip edebilirsiniz
          </p>
          
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="bg-white text-gray-900 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="bg-white text-gray-900 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="bg-white text-gray-900 w-12 h-12 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="bg-white text-gray-900 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
