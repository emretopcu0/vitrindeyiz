# Vitrin360 - İstanbul İşletme Rehberi

Vitrin360, İstanbul'daki işletmeleri dijital platformda bir araya getiren modern bir işletme rehberidir. Müşterilerin kolayca işletme bulup iletişim kurabildiği kullanıcı dostu bir arayüz sunar.

## Özellikler

- **Responsive Tasarım** - Tüm cihazlarda mükemmel görünüm
- **Gelişmiş Arama** - Kategori, ilçe ve anahtar kelime arama
- **37+ Kategori** - Restoranlardan oto servislere kadar geniş yelpaze
- **Değerlendirme Sistemi** - Müşteri yorumları ve puanlama
- **Hızlı İletişim** - Telefon ve WhatsApp entegrasyonu
- **Harita Entegrasyonu** - İşletmelerin konum bilgisi
- **Reklam Paketleri** - İşletmeler için premium listeleme seçenekleri

## Teknoloji Stack

- **React 18** - Modern UI kütüphanesi
- **TypeScript** - Tip güvenliği
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Sayfa arası navigasyon
- **Lucide React** - Modern ikon kütüphanesi

## Kurulum

### Gereksinimler
- Node.js 16+ 
- npm veya yarn

### Adımlar

1. Repository'yi klonlayın:
```bash
git clone https://github.com/kullanici-adiniz/vitrin360.git
cd vitrin360
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm start
```

Uygulama `http://localhost:3000` adresinde çalışacaktır.

## Proje Yapısı

```
src/
├── components/          # Tekrar kullanılabilir bileşenler
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── CategoryNavigation.tsx
│   ├── BusinessListings.tsx
│   ├── CallToActionBanner.tsx
│   └── Footer.tsx
├── pages/              # Sayfa bileşenleri
│   ├── SectorsPage.tsx
│   ├── AdvertisePage.tsx
│   ├── ContactPage.tsx
│   └── BusinessDetailPage.tsx
├── App.tsx            # Ana uygulama bileşeni
└── index.css          # TailwindCSS stilleri
```

## Sayfalar

- **Ana Sayfa** (`/`) - Hero section, arama ve öne çıkan işletmeler
- **Sektörler** (`/sektorler`) - Tüm işletme kategorileri
- **Reklam Ver** (`/reklam-ver`) - Reklam paketleri ve başvuru formu
- **İletişim** (`/iletisim`) - İletişim bilgileri ve form
- **İşletme Detay** (`/isletme/:id`) - Detaylı işletme profili

## Tasarım Özellikleri

- Modern ve temiz arayüz
- Mavi renk teması
- Responsive grid layout
- Hover efektleri ve animasyonlar
- Accessibility uyumlu

## Build ve Dağıtım

### Production Build
```bash
npm run build
```

### Test
```bash
npm test
```

## Lisans

Bu proje MIT lisansı altındadır.

## Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit yapın (`git commit -m 'Add some AmazingFeature'`)
4. Push yapın (`git push origin feature/AmazingFeature`)
5. Pull request açın

## İletişim

Proje hakkında sorularınız için:
- E-posta: info@vitrin360.com
- Website: [vitrin360.com](https://vitrin360.com)

---

Eğer bu projeyi beğendiyseniz star vermeyi unutmayın!
