document.addEventListener('DOMContentLoaded', () => {
    
    // TEMA DEĞİŞTİRİCİ (Koyu / Açık Tema)
    const themeToggle = document.getElementById('theme-toggle');
    
    // LocalStorage ile kaydedilen temayı kontrol et
    if (localStorage.getItem('tema') === 'acik') {
        document.body.classList.add('light-theme');
        if (themeToggle) themeToggle.textContent = '☀️';
    } else {
        if (themeToggle) themeToggle.textContent = '🌙';
    }

    // Butona tıklanınca temayı değiştir
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            
            if (document.body.classList.contains('light-theme')) {
                themeToggle.textContent = '☀️';
                localStorage.setItem('tema', 'acik'); // Açık temayı kaydet
            } else {
                themeToggle.textContent = '🌙';
                localStorage.setItem('tema', 'koyu'); // Koyu temayı kaydet
            }
        });
    }

    // DAKTİLO EFEKTİ (Yazı Yazma Animasyonu)
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const kelimeler = ["Yazılım Mühendisi", "Girişimci", "Backend Developer", "Fullstack Developer"];
        let kelimeIndex = 0;
        let harfIndex = 0;
        let siliniyorMu = false;

        function yaz() {
            const aktifKelime = kelimeler[kelimeIndex];
            
            if (siliniyorMu) {
                // Harf harf sil
                typewriterElement.textContent = aktifKelime.substring(0, harfIndex - 1);
                harfIndex--;
            } else {
                // Harf harf yaz
                typewriterElement.textContent = aktifKelime.substring(0, harfIndex + 1);
                harfIndex++;
            }

            let yazmaHizi = 100;
            if (siliniyorMu) {
                yazmaHizi = 50;
            }

            // Kelime tamamen yazıldıysa beklesin ve silmeye başlasın
            if (!siliniyorMu && harfIndex === aktifKelime.length) {
                yazmaHizi = 1500;
                siliniyorMu = true;
            } 
            // Kelime tamamen silindiyse sonraki kelimeye geçsin
            else if (siliniyorMu && harfIndex === 0) {
                siliniyorMu = false;
                kelimeIndex = (kelimeIndex + 1) % kelimeler.length; 
                yazmaHizi = 500;
            }

            setTimeout(yaz, yazmaHizi);
        }
        
        setTimeout(yaz, 1000);
    }

    function scrollReveal() {
        const elemanlar = document.querySelectorAll('.reveal');
        
        for (let i = 0; i < elemanlar.length; i++) {
            const pencereYuksekligi = window.innerHeight;
            const elemanUsteUzaklik = elemanlar[i].getBoundingClientRect().top;
            const gorunmeSiniri = 100;
            
            if (elemanUsteUzaklik < pencereYuksekligi - gorunmeSiniri) {
                elemanlar[i].classList.add('active');
            }
        }
    }

    // Sayfa yüklendiğinde ve kaydırıldığında fonksiyonu çalıştır
    window.addEventListener('scroll', scrollReveal);
    scrollReveal(); // Sayfa ilk açıldığında ekranda olanlar hemen gözüksün diye bir kez tetikliyoruz

    // İLETİŞİM FORMU KONTROLÜ
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Sayfanın yenilenmesini engelle
            
            const adSoyad = document.getElementById('name').value.trim();
            const eposta = document.getElementById('email').value.trim();
            const mesaj = document.getElementById('message').value.trim();

            // Boş alan kontrolü
            if (adSoyad === '' || eposta === '' || mesaj === '') {
                alert('Lütfen formdaki tüm alanları doldurun!');
                return;
            }

            alert('Mesajınız başarıyla gönderildi! Teşekkürler.');
            contactForm.reset(); // Formu temizle
        });
    }
});
