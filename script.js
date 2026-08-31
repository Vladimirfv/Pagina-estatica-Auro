// URL del APK — reemplazar con el link de Supabase Storage cuando esté listo
const APK_URL = '#';

const btnDownload = document.getElementById('btn-download');

if (btnDownload) {
  btnDownload.addEventListener('click', function (e) {
    if (APK_URL === '#') {
      e.preventDefault();
      alert('El archivo de descarga estará disponible muy pronto.');
      return;
    }
    btnDownload.href = APK_URL;
  });
}

// ── ANIMACIÓN HERO AL CARGAR ──
window.addEventListener('load', () => {
  const heroText  = document.querySelector('.hero-text');
  const phoneFrame = document.querySelector('.phone-frame');

  if (heroText)   heroText.classList.add('loaded');
  if (phoneFrame) phoneFrame.classList.add('loaded');

  // Pulso en botón de descarga (después de que todo cargue)
  setTimeout(() => {
    if (btnDownload) btnDownload.classList.add('btn-pulse');
  }, 1200);
});

// ── SCROLL REVEAL (bidireccional) ──
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(el => observer.observe(el));

// ── DETECCIÓN ANDROID ──
const isAndroid = /android/i.test(navigator.userAgent);

if (!isAndroid && btnDownload) {
  const note = document.querySelector('.hero-note');
  if (note) {
    note.textContent = '⚠️ Esta app es solo para dispositivos Android.';
    note.style.color = '#60A5FA';
  }
}