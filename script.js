// Espera a que el documento esté listo
$(document).ready(function() {
    // Selecciona el contenedor del carrusel y llama a la función slick()
    $('.carousel').slick({
        autoplay: true,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

// Espera a que el documento esté listo
$(document).ready(function() {
    // Selecciona el botón del menú de hamburguesa y el menú desplegable
    const menuBtn = $('.menu-btn');
    const menuResponsive = $('.menu-responsive');
  
    // Función para alternar la visibilidad del menú desplegable
    menuBtn.click(function() {
      menuResponsive.slideToggle(200);
    });
  
    // Detecta el ancho de la pantalla y oculta/muestra el menú de hamburguesa según sea necesario
    $(window).resize(function() {
      if (window.innerWidth >= 768) {
        menuBtn.hide();
        menuResponsive.hide();
      } else {
        menuBtn.show();
      }
    });
  
    // Inicialmente, oculta el menú de hamburguesa en pantallas grandes
    if (window.innerWidth < 768) {
      menuBtn.show();
    }
  });
  
// JavaScript para mostrar/ocultar el menú
$(document).ready(function() {
    $('.menu-toggle').click(function() {
      $('.menu').toggleClass('active');
      $('.close-menu').toggleClass('active');
      $('.menu-toggle').toggleClass('active'); // Agrega esta línea para ocultar el botón de hamburguesa
    });
  
    $('.close-menu').click(function() {
      $('.menu').removeClass('active');
      $('.close-menu').removeClass('active');
      $('.menu-toggle').toggleClass('active'); // Agrega esta línea para mostrar el botón de hamburguesa
    });
  });
  