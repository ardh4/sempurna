// Memulai musik otomatis saat halaman dimuat
window.onload = () => {
  const song = document.getElementById('song');
  song.play().catch(error => {
    console.error("Autoplay tidak diizinkan oleh browser. Tekan play manual.");
  });
};

// Mengatur ulang posisi hati secara acak
document.querySelectorAll('.heart').forEach((heart, index) => {
  heart.style.left = `${Math.random() * window.innerWidth}px`;
  heart.style.animationDelay = `${index * 1}s`;
});