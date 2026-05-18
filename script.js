document.addEventListener('DOMContentLoaded', () => {
    
    // 1. TEMA DEĞİŞTİRİCİ (Koyu / Açık Tema)
    const temaButonu = document.getElementById('theme-toggle');
    
    // Tarayıcı hafızasında açık tema kayıtlıysa yükle
    if (localStorage.getItem('tema') === 'acik') {
        document.body.classList.add('light-theme');
        if (temaButonu) temaButonu.textContent = '☀️';
    }

    // Butona tıklandığında temayı değiştir
    if (temaButonu) {
        temaButonu.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            
            if (document.body.classList.contains('light-theme')) {
                temaButonu.textContent = '☀️';
                localStorage.setItem('tema', 'acik'); // Hafızaya açık kaydet
            } else {
                temaButonu.textContent = '🌙';
                localStorage.setItem('tema', 'koyu'); // Hafızaya koyu kaydet
            }
        });
    }

    // 2. İLETİŞİM FORMU BOŞ ALAN KONTROLÜ
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Sayfanın yenilenmesini engeller
            
            const ad = document.getElementById('name').value.trim();
            const eposta = document.getElementById('email').value.trim();
            const mesaj = document.getElementById('message').value.trim();

            // Basit boş alan kontrolü
            if (ad === '' || eposta === '' || mesaj === '') {
                alert('Lütfen tüm alanları doldurun!');
            } else {
                alert('Mesajınız başarıyla gönderildi!');
                form.reset(); // Form kutularını temizler
            }
        });
    }
});
