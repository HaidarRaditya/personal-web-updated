<script>
  window.addEventListener('load', () => {
    const splash = document.querySelector('.splash');
    const svg = splash.querySelector('svg');

    // Animasi kecil sebelum fade out
    svg.classList.add('animate');

    setTimeout(() => {
      splash.classList.add('hide');
    }, 2500); // 2.5 detik
  });
</script>
