document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Formun sayfayı yenilemesini engelle
            e.preventDefault();
            
            // Verileri al
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Sadece ekstra bir JS kontrolü gösterişi için
            if (name === '' || email === '' || message === '') {
                alert('Lütfen tüm alanları doldurunuz.');
                return;
            }

            // Başarılı mesajı
            alert(`Teşekkürler ${name}! Mesajınız başarıyla alınmıştır. Sunum için harika bir örnek!`);
            
            // Formu sıfırla
            contactForm.reset();
        });
    }
});
