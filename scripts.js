function initializeFlipbook() {
  const isPortrait = window.innerHeight > window.innerWidth;
  const isMobile = window.innerWidth <= 768;
  
  $(".flipbook").turn('destroy'); // Destroy existing instance
  
  $(".flipbook").turn({
    width: $('.flipbook').width(),
    height: $('.flipbook').height(),
    autoCenter: true,
    display: (isMobile && isPortrait) ? 'single' : 'double',
    acceleration: true,
    gradients: true,
    elevation: 50
  });
}

// Initialize on load
$(document).ready(function() {
  initializeFlipbook();
});

// Reinitialize on orientation change
$(window).on('orientationchange resize', function() {
  setTimeout(initializeFlipbook, 100);
});