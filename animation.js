document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.col-md-2');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Tambahkan delay untuk setiap card dengan jeda bertahap
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 200); // Menambahkan delay 200ms per card
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.1 // Animasi dimulai saat 10% elemen terlihat
    });

    cards.forEach(card => {
        observer.observe(card);  // Observasi setiap card
    });
});
