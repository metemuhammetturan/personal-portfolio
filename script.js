document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. TEMA DEĞİŞTİRİCİ (Dark / Light Mode)
    // ==========================================
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Kullanıcının daha önceki tercihini kontrol et
    if(localStorage.getItem('theme') === 'light') {
        body.classList.add('light-theme');
        if(themeToggle) themeToggle.textContent = '☀️';
    } else {
        if(themeToggle) themeToggle.textContent = '🌙';
    }

    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            if(body.classList.contains('light-theme')) {
                themeToggle.textContent = '☀️';
                localStorage.setItem('theme', 'light');
            } else {
                themeToggle.textContent = '🌙';
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // ==========================================
    // 2. DAKTİLO (TYPEWRITER) EFEKTİ
    // ==========================================
    const typewriterElement = document.querySelector('.typewriter');
    if(typewriterElement) {
        const words = ["Yazılım Mühendisi", "Girişimci", "Backend Developer", "Fullstack Developer"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentWord = words[wordIndex];
            
            if(isDeleting) {
                typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50; // Silerken daha hızlı
            } else {
                typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100; // Yazarken normal hız
            }

            // Kelime bittiğinde bekle ve silmeye başla
            if(!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 1500; // Kelime sonu bekleme
                isDeleting = true;
            } else if(isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // Yeni kelimeye başlamadan önce bekle
            }

            setTimeout(type, typeSpeed);
        }
        
        // Efekti başlat
        setTimeout(type, 1000);
    }

    // ==========================================
    // 3. SCROLL REVEAL (Aşağı Kaydırdıkça Çıkma)
    // ==========================================
    const reveals = document.querySelectorAll('.reveal');
    
    if('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Sadece bir kere animasyon oynasın
                }
            });
        }, {
            threshold: 0.1, // Elementin %10'u göründüğünde tetikle
            rootMargin: "0px 0px -50px 0px"
        });

        reveals.forEach(reveal => {
            revealObserver.observe(reveal);
        });
    } else {
        // Eski tarayıcılar için direkt görünür yap
        reveals.forEach(reveal => reveal.classList.add('active'));
    }

    // ==========================================
    // 4. İLETİŞİM FORMU (Basit Kontrol)
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Sayfa yenilenmesini engelle
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Lütfen tüm alanları doldurunuz.');
                return;
            }

            alert(`Teşekkürler ${name}! Mesajınız başarıyla alınmıştır. Sunum için harika bir örnek!`);
            contactForm.reset();
        });
    }
});
