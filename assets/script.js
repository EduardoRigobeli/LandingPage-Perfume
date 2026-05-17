/* ── NAVBAR SCROLL ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── HAMBURGER ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
hamburger.classList.toggle('open');
mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mob-link').forEach(link => {
link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
});
});

/* ── REVEAL ON SCROLL ── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
entries.forEach(e => {
    if (e.isIntersecting) {
    e.target.classList.add('visible');
    observer.unobserve(e.target);
    }
});
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
reveals.forEach(el => observer.observe(el));

/* ── ADD TO CART ── */
document.querySelectorAll('.card-btn').forEach(btn => {
btn.addEventListener('click', function() {
    const orig = this.textContent;
    this.textContent = '✓ Adicionado';
    this.style.background = 'var(--espresso)';
    this.style.color = 'var(--ivory)';
    setTimeout(() => {
    this.textContent = orig;
    this.style.background = '';
    this.style.color = '';
    }, 1800);
});
});

/* ── FORM SUBMIT ── */
document.getElementById('contactForm').addEventListener('submit', function(e) {
e.preventDefault();
const name  = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const msg   = document.getElementById('mensagem').value.trim();
if (!name || !email || !msg) {
    alert('Por favor, preencha os campos obrigatórios.');
    return;
}
const success = document.getElementById('formSuccess');
success.style.display = 'block';
this.reset();
setTimeout(() => { success.style.display = 'none'; }, 5000);
});