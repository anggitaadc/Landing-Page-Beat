let testimonials = document.querySelectorAll('.testimonial');
let current = 0;

function showNextTestimonial() {
    testimonials[current].classList.remove('active');
    current = (current + 1) % testimonials.length;
    testimonials[current].classList.add('active');
}

setInterval(showNextTestimonial, 3000); // Ganti tiap 5 detik

// FAQ
document.addEventListener("DOMContentLoaded", function () {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        faq.querySelector(".faq-question").addEventListener("click", () => {
            faq.classList.toggle("open");
        });
    });
});

// window.addEventListener('load', function () {
//     const loader = document.getElementById('loader');
//     const main = document.getElementById('main-content');
//     loader.style.opacity = '0';
//     setTimeout(() => {
//         loader.style.display = 'none';
//         main.style.display = 'block';
//     }, 600000); // waktu fade out
// });
