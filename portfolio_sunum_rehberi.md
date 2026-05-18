# 🎓 Karabük Üniversitesi - İnternet Tabanlı Programlama
## 🚀 Kişisel Portfolyo Sunum Kılavuzu (Süper Sade Sürüm)

Bu kılavuz, **baştan aşağı sıfırdan yazıp sadeleştirdiğimiz** yeni kodlarımıza göre hazırlanmıştır. Projedeki tüm karmaşık kodlar temizlenmiş, anlatılması ve savunulması en kolay hale getirilmiştir.

---

## 📋 1. Sunumda Ne Anlatacaksın? (Sayfa Özetleri)

1. **Ana Sayfa ([index.html](file:///Users/metem.turan/Developer/Dersler/portfolio/index.html)):** "Hocam merhaba, bu sayfada beni karşılayan sade bir Hero alanı var. Navbar (Menü) kısmındaki butonla Koyu/Açık tema geçişi yapıyoruz."
2. **Eğitim & Deneyim Sayfası ([egitim.html](file:///Users/metem.turan/Developer/Dersler/portfolio/egitim.html)):** "Bu sayfada akademik eğitim bilgilerimi ve iş deneyimlerimi sade kutular (`content-box` sınıfları) halinde listeledim."
3. **Projeler & Yetkinlikler Sayfası ([projeler.html](file:///Users/metem.turan/Developer/Dersler/portfolio/projeler.html)):** "Projelerimi yan yana listelemek için modern **CSS Grid** yapısını kullandım. Projelerimin hemen altında ise uzman olduğum teknolojileri listelediğim bir **Yetkinlikler** bölümü bulunuyor. Bu iki alanı tek sayfada mantıksal olarak birleştirdim."
4. **İletişim Sayfası ([iletisim.html](file:///Users/metem.turan/Developer/Dersler/portfolio/iletisim.html)):** "İletişim bilgilerim ve boş alan gönderimini engelleyen sade bir Javascript formu var."

---

## 💻 2. JS Kodunun Açıklaması (Sadece 2 Blok!)

Tüm Javascript dosyamız ([script.js](file:///Users/metem.turan/Developer/Dersler/portfolio/script.js)) sadece iki basit işten oluşuyor:

### Blok A: Tema Değiştirici (Light/Dark Mode)
```javascript
temaButonu.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    // ... localStorage işlemleri
});
```
* **Hocaya Açıklama:** "Hocam, butona tıklandığında `classList.toggle('light-theme')` metoduyla body etiketine `.light-theme` sınıfını ekleyip çıkartıyorum. Kullanıcının tercihini tarayıcı hafızasında saklamak için de **`localStorage`** veri yapısını kullandım. Sayfa yenilense de tema kaybolmuyor."

### Blok B: İletişim Form Kontrolü
```javascript
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    // ... boşluk kontrolü ve alert
});
```
* **Hocaya Açıklama:** "Hocam, formun gönderilme (`submit`) anını dinliyoruz.
  * **`e.preventDefault()`** yazarak tarayıcının formu gönderip sayfayı yenilemesini engelledim.
  * Input alanlarının değerlerini `.value` ile alıp boş olup olmadıklarını `=== ''` şeklinde kontrol ettim.
  * Eğer alanlar boşsa uyarı gösteriyorum, doluysa başarı mesajı verip `form.reset()` ile formu sıfırlıyorum."

---

## 🎨 3. CSS Kodunun Açıklaması ([style.css](file:///Users/metem.turan/Developer/Dersler/portfolio/style.css))

Hocanın CSS hakkında soracağı en kritik 3 yer:

1. **CSS Değişkenleri (`:root`):**
   * "Renkleri merkezi olarak `:root` içinde tanımladım. Tema değişiminde sadece `body.light-theme` altında değişkenlerin renk kodlarını ezdim. Bu sayede tüm site renkleri tek yerden değişiyor."
2. **CSS Grid Yapısı (Projeler Sayfası):**
   * `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))`
   * **Hocaya Açıklama:** "Hocam, bu kod sayesinde projeler sayfasındaki kartlar esnek bir şekilde yan yana sıralanıyor. Ekran daraldığında kartlar otomatik olarak alt alta geçiyor, böylece esnek (responsive) tasarımı sağlamış oluyoruz."
3. **Yetkinlikler Etiketleri (Flexbox Düzeni):**
   * `display: flex; flex-wrap: wrap; gap: 10px;`
   * **Hocaya Açıklama:** "Hocam, yetkinlik etiketlerinin yan yana sıralanması, taşarsa alt satıra geçmesi ve aralarında 10px boşluk olması için **Flexbox** yerleşim modelini kullandım."

Bu sadeleşmiş kodlar ve açıklamalarla sunumu sorunsuz geçeceğine %100 eminim! 🚀🎓
