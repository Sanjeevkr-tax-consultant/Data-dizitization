<script>
  let scrollPosition = 0;
  function scrollGallery(direction) {
    const track = document.getElementById('galleryTrack');
    const imageWidth = track.querySelector('img').clientWidth + 20; // image + gap
    scrollPosition += direction * imageWidth * 2;
    scrollPosition = Math.max(0, Math.min(scrollPosition, track.scrollWidth - track.clientWidth));
    track.style.transform = `translateX(-${scrollPosition}px)`;
  }
</script>
  <script>
  function toggleMenu() {
    const navList = document.querySelector('#navbar ul');
    const hamburger = document.querySelector('.hamburger');

    navList.classList.toggle('active');

    // Change icon
    if (navList.classList.contains('active')) {
      hamburger.textContent = '✖';
    } else {
      hamburger.textContent = '☰';
    }
  }
</script>
<script>
  let lastScrollTop = 0;
  const header = document.getElementById("site-header");

  window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scroll Down → Hide
      header.classList.add("hide");
    } else {
      // Scroll Up → Show
      header.classList.remove("hide");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
</script>
<script>
  const header = document.getElementById("site-header");
  let prevScroll = window.pageYOffset;

  window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset;

    if (currentScroll > prevScroll) {
      // Scroll Down → Hide header
      header.classList.add("hide");
    } else {
      // Scroll Up → Show header
      header.classList.remove("hide");
    }

    prevScroll = currentScroll;
  });
</script>


